# NovaFlow

NovaFlow is a responsive landing-page concept for an AI productivity workspace. It is a frontend-only portfolio demo: there is no account system, backend, real AI processing, integrations, contact service, or payment processing. Product, security, customer, and pricing details shown in the interface are illustrative and must not be treated as claims about a real service.

## Features

- Responsive marketing page with product preview, feature, process, pricing, FAQ, and footer sections.
- Interactive navigation menu, product preview tabs, pricing cycle switch, and FAQ accordions.
- Reduced-motion support and visible keyboard focus styles.
- TypeScript checks, component tests, linting, and a production build.

## Technology

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion and Lucide icons
- Vitest, Testing Library, and jsdom

## Requirements

- Node.js 22 or later
- npm

## Local development

```sh
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Quality checks

```sh
npm run lint
npm test
npm run build
```

The build runs the TypeScript project checks before creating production files in `dist/`.

## Preview the production build

```sh
npm run build
npm run preview
```

## Deployment

The site is a static Vite single-page app and does not need environment variables. A Netlify configuration is included; connect the repository to Netlify and use the configured build command (`npm run build`) and publish directory (`dist`). Add the production canonical URL and social preview image to `index.html` after choosing the real deployment domain and preparing an image.

There is currently no live deployment URL. No hosting account or remote repository is configured in this workspace.

## Project layout

```text
src/
  components/
    layout/       Navigation and footer
    sections/     Landing page sections
    ui/           Reusable UI components
  test/           Vitest setup
  App.tsx         Page composition
  index.css       Theme tokens and global styles
public/           Static icons, manifest, and robots.txt
```

## Limitations

- Sign-up, sign-in, demo scheduling, contact, integrations, and checkout are not connected to services.
- Product details and pricing are concept content; do not deploy this as a real product page without reviewing and replacing those claims.
- No screenshot or social preview image is included.
- Set the canonical URL, social metadata, and sitemap to the actual deployment address before search indexing.
