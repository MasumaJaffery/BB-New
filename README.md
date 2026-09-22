# Brunswick Builders — Next.js + Tailwind

Scaffolded project containing the Navbar and Hero section matching the
existing Brunswick Builders site design.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## To finish

1. **Logo** — `components/Navbar.tsx` currently uses a simple placeholder
   SVG mark + text logo. Replace it with your real logo file (svg/png)
   when you have one.
2. **Hero photo** — drop your image into `public/images/hero-bridge.jpg`
   (or update the `src` in `components/Hero.tsx` to match your filename).
3. **Colors** — brand colors live in `tailwind.config.ts` under
   `navy`, `gold`, and `cream`. Adjust the hex values there if you have
   exact brand hex codes.
4. **Links** — nav items and buttons in `Navbar.tsx` / `Hero.tsx` point to
   placeholder routes (`/about`, `/services`, `/quote`, etc.) — update
   these to match your actual site structure.

## Structure

```
app/
  layout.tsx      — root layout, page metadata
  page.tsx         — home page (renders Navbar + Hero)
  globals.css      — Tailwind directives
components/
  Navbar.tsx       — top nav, transparent over hero, mobile menu
  Hero.tsx         — hero section + stats bar
public/images/     — put your photos here
tailwind.config.ts — brand color tokens
```
