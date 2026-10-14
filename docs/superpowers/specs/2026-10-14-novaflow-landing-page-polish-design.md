# NovaFlow Landing Page Polish — Design

**Date:** 2026-10-14  
**Status:** Approved in chat; awaiting written-spec review  
**Project:** Existing NovaFlow React/Vite landing page

## Goal

Turn the existing NovaFlow concept page into a coherent, polished portfolio presentation. The current deployed screenshot shows the fixed navigation competing with the hero dashboard, crowded preview content, and prototype-like labels. The redesigned page should make the product concept easy to understand, look intentional at desktop and mobile sizes, and remain honest about what is and is not implemented.

## Audience and positioning

The audience is portfolio visitors evaluating the design and frontend implementation. NovaFlow remains a fictional productivity-workspace concept. The dashboard uses synthetic data; the page has no product backend, account system, AI service, integrations, contact flow, or payment processing. No real customer, security, performance, or product-operation claims may be introduced.

## Approved visual direction

- Preserve the existing dark, modern NovaFlow identity while reducing competing glow effects and gradients.
- Establish a clear type hierarchy, comfortable spacing, consistent card treatment, and a restrained accent palette.
- Keep the fixed navigation visually distinct from the hero and ensure it does not obscure hero content.
- Present the hero copy and dashboard preview as two intentional desktop columns with enough width for readable content.
- Stack the hero preview below the copy at narrow sizes; prevent clipping and horizontal page overflow.
- Carry the visual system consistently through the existing sections and footer.

## Page story and content

- Give the hero a concise value proposition and a clear path to explore the dashboard concept.
- Remove prototype-style status labels from the hero. Keep a clear, unobtrusive disclosure that this is a concept and that its data is illustrative.
- Frame feature and workflow sections as proposed capabilities demonstrated by the interface, not capabilities of a live service.
- Do not add fabricated testimonials, customer logos, adoption figures, or other real-world performance claims.
- Keep pricing explicitly illustrative and make clear that checkout and plans are not available.
- Preserve concise disclosures at relevant decision points (dashboard, pricing, and project/footer context) without repeating caveats in every card.
- Keep existing section order and anchors unless a small adjustment is needed to make the story flow clearly.

## Interactions and accessibility

Preserve the existing navigation links and mobile menu, dashboard view tabs and filters, pricing-cycle toggle, and FAQ accordions. Keep their state local to the frontend concept; do not add backend behavior.

Maintain keyboard operation, visible focus, semantic headings and controls, accessible names, sufficient text contrast, practical touch targets, and the current reduced-motion support. Motion should remain decorative and must not be required to understand the interface.

## Responsive behavior

- Desktop: navigation fits without colliding with the hero preview; hero uses a balanced copy/preview composition; dashboard cards retain readable labels and useful hierarchy.
- Tablet: navigation and hero transition cleanly without compressing dashboard cards into overlap.
- Mobile: hero stacks, actions remain usable, dashboard content fits its container, and wide dashboard views use their existing local overflow behavior where appropriate rather than forcing page-wide horizontal scrolling.
- Reserve predictable space for visual elements and avoid positioning that causes content to overlap at common viewport sizes.

## Existing architecture and implementation boundaries

Keep the existing React/Vite application and page composition in `src/App.tsx`. Make focused changes to the current navigation, hero/dashboard preview, section styling/copy, and shared styles. Do not recreate the application, replace the toolchain, add product services, or introduce dependencies unless implementation reveals a concrete need and the user approves it.

Likely implementation areas are `src/components/layout/Navigation.tsx`, `src/components/sections/`, and `src/index.css`. Update metadata only if the approved concept positioning requires a small consistency correction.

## Verification plan

- Run `npm run lint`, `npm test`, and `npm run build` after implementation.
- Inspect the rendered page at desktop (about 1440×900), tablet (about 768×1024), and mobile (about 390×844) sizes.
- Verify there is no navigation/hero collision, clipped hero content, or page-level horizontal overflow.
- Verify mobile navigation, dashboard view/filter controls, pricing toggle, FAQ accordion, keyboard focus, and reduced-motion behavior remain usable.
- Review the final diff to ensure changes stay within this design and preserve the existing project work.

## Out of scope

Real authentication, AI processing, workspace persistence, third-party integrations, contact/support services, checkout, real pricing or customer claims, deployment configuration changes, and publishing a new deployment.
