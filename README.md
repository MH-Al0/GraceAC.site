# GraceAC Website

Next.js 14 site for GraceAC, an open-source Minecraft anticheat.

(reminder to self) 

All external URLs live in one place:

```
src/config/links.ts
```

## Wiring the contact form
(reminder to self) 

The contact form at /contact has a placeholder where the submission
logic lives. Replace it with Formspree (free, no backend needed):

1. Sign up at formspree.io
2. Create a form and copy your form ID
3. In src/app/contact/page.tsx, uncomment the fetch block and paste your ID

## Deploy to Vercel

1. Push repo contents (not a subfolder) to GitHub
2. Import at vercel.com
3. Vercel auto-detects Next.js, click Deploy

## Project structure

```
src/
├── app/
│   ├── globals.css          design tokens and resets
│   ├── layout.tsx           metadata
│   ├── page.tsx             homepage
│   ├── about/page.tsx       about page
│   └── contact/page.tsx     contact page
├── components/
│   ├── Nav, Hero, Button
│   ├── StatsBar, Features
│   ├── HowItWorks, CtaBanner, Footer
│   └── useReveal.ts         scroll reveal hook
└── config/
    └── links.ts             swap all links here
```

## Coding conventions

- PascalCase for variables, components, classes, and CSS modules
- No mutation, immutable state patterns throughout
- No hardcoded values, tokens in globals.css, URLs in links.ts
- Comments only where strictly necessary, abbreviated
