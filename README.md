# Cool It Air Conditioning Repair — Demo Website

A demo website for **Cool It Air Conditioning Repair**, a Florida air conditioning company.
It's built as a sample design and is clearly labelled as a demo throughout.

## Pages

- `index.html`: home (hero, services, why us, how it works, recent work, reviews)
- `services.html`: services
- `gallery.html`: photo gallery with lightbox
- `about.html`: about and company values
- `quote.html`: "Get a Quote" form (demo only; does not submit anywhere)
- `privacy.html`: privacy policy

## Tech

Plain HTML, CSS and vanilla JavaScript. No build step.

Preview locally:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Before going live

- Remove the demo banner, footer demo note, "(Demo)" in page titles and the `noindex` meta tag
- Fill in remaining `[DEMO: ...]` placeholders (email address, About story, privacy policy effective date)
- Connect the quote form to a form service (Formspree, Netlify Forms, etc.)
