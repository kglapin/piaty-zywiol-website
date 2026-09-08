# Piąty Żywioł — strona www (piatyzywiolkalisz.pl)

Astro (static) + Tailwind. Strona wizytówka studia masażu/kosmetyki w Kaliszu.

## Komendy

```bash
npm install --legacy-peer-deps   # instalacja (UWAGA: zwykłe npm install failuje — konflikt peer deps @astrojs/tailwind vs astro 6)
npm run dev                      # dev server na http://localhost:4321
npm run build                    # build do dist/
npm run deploy                   # build + FTP na serwer (ręczny, awaryjny)
```

## Deploy — NAJWAŻNIEJSZE

**Deploy działa automatycznie przez GitHub Actions:**
- Każdy `git push` na `main` → build → FTP na serwer Zenbox (~30-40s)
- Workflow: `.github/workflows/deploy.yml`
- Sekret: `FTP_PASSWORD` (ustawiony w repo GitHub)
- Status: `gh run list --repo kglapin/piaty-zywiol-website --limit 1`

**Proces deployu: commit → push → GitHub Actions robi resztę. Nie trzeba nic więcej.**

### Hosting (Zenbox)

- Domena: https://piatyzywiolkalisz.pl/ (IP: 2.57.138.248)
- Panel: panel.zenbox.pl (konto Marty Włodarskiej)
- Serwer: Zenbox "Hosting eBiznes 25k"
- Katalog na serwerze: `/home/zywiol/domains/piatyzywiolkalisz.pl/`
- Konto FTP: `ftp@piatyzywiolkalisz.pl` (ścieżka domeny) lub `zywiol` (główne, `/home/zywiol/`)
- Hasło FTP: w sekrecie GitHub `FTP_PASSWORD` / w `deploy.sh` (nie commitować hasła nigdzie indziej)
- SSH: port 22 (PL) / 2233 (zagranica) — wymaga loginu głównego konta FTP (`zywiol`)

### Znany problem: firewall Zenboxa

Firewall Zenboxa **blokuje IP serwerów datacenter** (m.in. IP agenta Devin `217.173.5.112`):
- FTP/SSH z takiego IP: połączenie TCP się udaje, ale serwer natychmiast zamyka połączenie
- HTTP(S) z takiego IP: zwraca stronę "Unauthorized Access" / "The firewall on this server is blocking your connection"
- **GitHub Actions NIE jest blokowany** — dlatego deploy przez Actions działa
- Weryfikacji strony na żywo nie da się zrobić z IP datacenter — prosić użytkownika o sprawdzenie w przeglądarce

## Struktura

- `src/pages/index.astro` — strona główna (składa komponenty)
- `src/components/` — sekcje strony (Hero, ServicesBar, Prices, Contact, Footer, itd.)
- `public/` — statyczne assety (logo, obrazy, booksy-logo.png)
- `dist/` — output buildu (gitignored)

## Konwencje

- Kolory/tailwind: custom palette w `tailwind.config.mjs` (cocoa, cream, gold, clay, blush)
- Ikony: inline SVG (styl spójny z Contact.astro — kafelki `h-24 w-24 rounded-[1.5rem]`)
- Linki zewnętrzne: `target="_blank" rel="noreferrer"`
- Ważne linki: Booksy `https://booksy.com/pl-pl/354223_piaty-zywiol-marta-wlodarska-beauty-massage_salon-kosmetyczny_17173_kalisz`, tel: 721050353

## Git

- Repo: https://github.com/kglapin/piaty-zywiol-website (branch `main`)
- Push na main = automatyczny deploy na produkcję
