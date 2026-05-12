import type { Context, Config } from '@netlify/edge-functions'

async function sha256(message: string): Promise<string> {
  const data = new TextEncoder().encode(message)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export default async (req: Request, context: Context) => {
  const password = Netlify.env.get('SITE_PASSWORD')
  if (!password) {
    return
  }

  const url = new URL(req.url)

  if (url.pathname === '/__auth' && req.method === 'POST') {
    const formData = await req.formData()
    const submitted = formData.get('password') as string
    const redirect = (formData.get('redirect') as string) || '/'

    if (submitted === password) {
      const token = await sha256(password + '__site_auth_salt__')
      const headers = new Headers()
      headers.set(
        'Set-Cookie',
        `_site_auth=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`,
      )
      headers.set('Location', redirect)
      return new Response(null, { status: 302, headers })
    }

    return new Response(passwordPage(true, redirect), {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  const cookies = req.headers.get('cookie') || ''
  const match = cookies.match(/_site_auth=([^;]+)/)

  if (match) {
    const expected = await sha256(password + '__site_auth_salt__')
    if (match[1] === expected) {
      return
    }
  }

  return new Response(passwordPage(false, url.pathname + url.search), {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

function passwordPage(error: boolean, redirect: string): string {
  const safeRedirect = redirect.replace(/"/g, '&quot;')
  return `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lösenordsskyddad sida</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);color:#f8fafc}
    .card{background:rgba(255,255,255,.05);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:48px 40px;max-width:400px;width:90%;text-align:center}
    .icon{font-size:48px;margin-bottom:16px}
    h1{font-size:1.5rem;font-weight:600;margin-bottom:8px}
    p{color:#94a3b8;font-size:.9rem;margin-bottom:24px}
    form{display:flex;flex-direction:column;gap:12px}
    input[type="password"]{padding:12px 16px;border:1px solid rgba(255,255,255,.2);border-radius:8px;background:rgba(255,255,255,.05);color:#f8fafc;font-size:1rem;outline:none;transition:border-color .2s}
    input[type="password"]:focus{border-color:#3b82f6}
    button{padding:12px;border:none;border-radius:8px;background:#3b82f6;color:#fff;font-size:1rem;font-weight:500;cursor:pointer;transition:background .2s}
    button:hover{background:#2563eb}
    .error{color:#f87171;font-size:.85rem;margin-top:4px}
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">🔒</div>
    <h1>Lösenordsskyddad sida</h1>
    <p>Ange lösenord för att komma åt webbplatsen.</p>
    <form method="POST" action="/__auth">
      <input type="hidden" name="redirect" value="${safeRedirect}">
      <input type="password" name="password" placeholder="Lösenord" required autofocus>
      ${error ? '<div class="error">Fel lösenord. Försök igen.</div>' : ''}
      <button type="submit">Logga in</button>
    </form>
  </div>
</body>
</html>`
}

export const config: Config = {
  path: '/*',
}
