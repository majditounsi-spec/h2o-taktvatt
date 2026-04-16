# WordPress Headless CMS – Setup Guide

## Översikt

Hemsidan fungerar som en **headless frontend** som kan hämta innehåll från WordPress REST API. 
När WordPress inte är konfigurerat visas statisk data (den du ser nu). 
När WordPress är igång hämtas text, omdömen och tjänster därifrån istället.

## Steg 1: Installera WordPress

Installera WordPress på ditt webbhotell, t.ex.:
- `admin.h2otaktvatt.se` (rekommenderat)
- `h2otaktvatt.se/wp` (alternativ)

## Steg 2: Installera pluginet

1. Kopiera mappen `wordpress/h2o-headless/` till `wp-content/plugins/h2o-headless/`
2. Gå till WordPress admin → Plugins → Aktivera "H2O Taktvätt – Headless CMS"

## Steg 3: Konfigurera inställningar

Gå till **Inställningar → H2O Taktvätt** i WordPress admin.
Fyll i:
- Företagsnamn
- Telefon
- E-post
- Öppettider
- Verksamhetsområde

## Steg 4: Lägg till innehåll

### Tjänster
Gå till **Tjänster → Lägg till ny** i WordPress admin.
- **Titel:** T.ex. "Taktvätt"
- **Innehåll:** Beskrivning av tjänsten
- **Utdrag:** Kort beskrivning (visas i tjänstekort)
- **Utvald bild:** Bild för tjänsten
- **Anpassade fält:**
  - `price` – t.ex. "Från 15 000 kr"
  - `features` – lista med features
  - `guarantee` – t.ex. "2 år"
  - `duration` – t.ex. "1-2 dagar"
  - `icon_type` – "blue" eller "orange"

### Omdömen
Gå till **Omdömen → Lägg till ny**:
- **Titel:** Kundens namn
- **Anpassade fält:**
  - `name` – Kundens namn
  - `location` – Stad (t.ex. "Kalmar")
  - `text` – Omdömestexten
  - `service` – Vilken tjänst (t.ex. "Taktvätt")
  - `rating` – Betyg 1-5

### Sidor
Vanliga WordPress-sidor används för: Om oss, Kontakt, etc.
- Skapa sidor med slug: `om-oss`, `kontakt`, `taktvatt`, `takmalning`, etc.

## Steg 5: Koppla frontend till WordPress

Lägg till i din `.env`-fil (eller i webbhotellets miljövariabler):

```
VITE_WORDPRESS_URL=https://admin.h2otaktvatt.se
```

Bygg om sidan:
```bash
npm run build
```

## Steg 6: Deploy

Ladda upp `dist/`-mappen till webbhotellet eller kör `npx gh-pages -d dist`.

## Bra tillägg för WordPress

- **Advanced Custom Fields (ACF)** – Bättre gränssnitt för anpassade fält
- **ACF to REST API** – Exponerar ACF-fält automatiskt i REST API
- **Yoast SEO** – SEO-hantering (meta-data hämtas via API)
- **WP REST Cache** – Cachar API-svar för bättre prestanda

## API Endpoints

| Endpoint | Beskrivning |
|----------|-------------|
| `/wp-json/wp/v2/pages?slug=om-oss` | Hämta en sida |
| `/wp-json/wp/v2/services` | Alla tjänster |
| `/wp-json/wp/v2/testimonials` | Alla omdömen |
| `/wp-json/h2o/v1/settings` | Företagsinställningar |

## Utan WordPress

Sidan fungerar helt utan WordPress! All statisk data finns i React-komponenterna.
WordPress är ett valfritt tillägg för enklare redigering.
