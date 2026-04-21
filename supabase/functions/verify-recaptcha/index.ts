// Supabase Edge Function: verify-recaptcha
//
// Verifies a reCAPTCHA v3 token with Google's siteverify endpoint, and – if
// the score is high enough – inserts the contact-form inquiry into the
// `inquiries` table.
//
// Required secrets (set via `supabase secrets set ...`):
//   RECAPTCHA_SECRET_KEY  – the reCAPTCHA v3 secret key
//
// Already provided by the Supabase runtime:
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
//
// Deploy:  supabase functions deploy verify-recaptcha --no-verify-jwt

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const MIN_SCORE = 0.5;
const EXPECTED_ACTION = "offertforfragan";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Inquiry {
  name: string;
  phone: string;
  email?: string | null;
  address?: string | null;
  service?: string | null;
  message?: string | null;
}

interface RequestBody {
  token: string;
  inquiry: Inquiry;
}

interface SiteVerifyResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const secret = Deno.env.get("RECAPTCHA_SECRET_KEY");
  if (!secret) {
    return json({ error: "Server missing RECAPTCHA_SECRET_KEY" }, 500);
  }

  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  if (!body?.token || !body?.inquiry?.name || !body?.inquiry?.phone) {
    return json({ error: "Missing required fields" }, 400);
  }

  // 1. Verify token with Google
  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: body.token }).toString(),
    },
  );

  const verify = (await verifyRes.json()) as SiteVerifyResponse;

  if (!verify.success) {
    return json(
      { error: "reCAPTCHA verification failed", details: verify["error-codes"] },
      400,
    );
  }

  if (verify.action && verify.action !== EXPECTED_ACTION) {
    return json({ error: "reCAPTCHA action mismatch" }, 400);
  }

  if ((verify.score ?? 0) < MIN_SCORE) {
    return json({ error: "reCAPTCHA score too low", score: verify.score }, 403);
  }

  // 2. Insert the inquiry using the service-role key (bypasses RLS).
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { error: dbError } = await supabase.from("inquiries").insert({
    name: body.inquiry.name,
    phone: body.inquiry.phone,
    email: body.inquiry.email ?? null,
    address: body.inquiry.address ?? null,
    service: body.inquiry.service ?? null,
    message: body.inquiry.message ?? null,
  });

  if (dbError) {
    console.error("DB insert failed:", dbError);
    return json({ error: "Kunde inte spara förfrågan." }, 500);
  }

  return json({ ok: true, score: verify.score });
});

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}
