# Portfolio Website — Data · BI · AI · Product Development

A static, dependency-free portfolio site built from the Master Specification and the
Data/BI/AI Product Portfolio content.

## Files

```
portfolio/
├── index.html   — all sections, semantic markup, i18n-ready
├── styles.css   — design tokens, dark/light themes, responsive layout, animation
├── app.js       — i18n dictionary, dynamic section rendering, interactions
└── README.md
```

## Before you publish

1. **Replace placeholders** — search `index.html` and `app.js` for:
   - `[Your Name]` / `[ชื่อของคุณ]` — your name (nav brand + `<title>`)
   - `hello@example.com` — your real contact email
   - LinkedIn / GitHub links in the Contact section (`href="#"` placeholders — add your real profile URLs)
2. Optional: replace the SEO `<title>` in `index.html` with your name.

## Features implemented

- **Sections**: Hero, About, Core Skills (tabbed), What I Build (expandable flow), Featured
  Products (BizMind + AI Business Advisor with pipeline / feature / tech-highlight grids),
  Technical Architecture (animated 5-layer diagram), Product Development Capability (timeline),
  Differentiator, Career Direction, Contact, Footer.
- **Dark / Light mode** — toggle in the nav, default dark, persisted to `localStorage`.
- **Thai / English toggle** — `TH | EN` in the nav; all content is stored in a single i18n
  dictionary in `app.js`, persisted to `localStorage`.
- **Sticky nav** with scroll-based active-section highlighting and a top scroll-progress bar.
- **Scroll-reveal animation** (`IntersectionObserver`), animated number counters, hover
  micro-interactions, and a subtle animated data-flow pulse through the architecture diagrams.
- **No external JS framework** — vanilla HTML/CSS/JS only. Google Fonts (IBM Plex Sans / Mono)
  loaded via CDN; everything else is self-contained.
- **Accessible**: semantic landmarks, visible focus states, `aria-*` on interactive controls,
  `prefers-reduced-motion` respected.
- **Content honesty**: per the spec's content rule, no unverified claims of clients, revenue,
  launched status, or user counts — products are labeled "Product Development".

## Local preview

Just open `index.html` in a browser — no build step or server required.
