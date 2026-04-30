# ISKCON Hazaribag Website

Official website and installable PWA for ISKCON Hazaribag - Sri Sri Radha Madhava. The app presents temple information, festivals, live darshan, spiritual teachings, yatras, contact details, legal pages, and a Razorpay-powered donation flow.

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- Vite PWA
- Bun for package scripts

## Getting Started

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Create a production build:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

Run linting:

```bash
bun run lint
```

## Project Structure

```text
src/
  App.jsx              Route definitions and homepage composition
  main.jsx             React entry point
  index.css            Global styles
  components/          Homepage sections and shared layout
  pages/               Route-level pages
public/
  images/              Temple, festival, yatras, and donation assets
  favicon.svg
vite.config.js         Vite, Tailwind, and PWA configuration
```

## Main Routes

- `/` - Homepage with hero, festivals, live darshan, chronicle, teachings, and donation sections
- `/checkout` - Donation checkout flow
- `/confirm` - Donation confirmation page
- `/founder-acharya` - Srila Prabhupada page
- `/yatras` - Yatra information
- `/contact` - Contact and temple address
- `/privacy-policy` - Privacy policy
- `/disclaimer` - Disclaimer

## Donation Flow

The checkout page creates a payment order through the configured API endpoint and opens Razorpay Checkout in the browser. The current Razorpay key and order API are defined in `src/pages/CheckoutPage.jsx`.

Before production deployment, verify:

- Razorpay key is using the correct live/test mode
- Order creation endpoint is production-ready
- Payment verification is handled server-side
- Confirmation page data is trusted only after backend verification

## PWA

PWA support is configured in `vite.config.js` with auto updates, a manifest, app icons, and runtime caching for fonts, CDN assets, and selected remote images.

## Content And Assets

Most visual assets live in `public/images`. Components reference them with root-relative URLs such as:

```jsx
<img src="/images/iskcon_logo.png" alt="ISKCON Hazaribag" />
```

When replacing images, keep filenames stable when possible to avoid touching multiple components.

## Development Notes

- The homepage is assembled in `HomePage` inside `src/App.jsx`.
- Navigation and footer are shared components.
- Several components include scoped `<style>` blocks alongside JSX.
- The app is marked private in `package.json`, so it is intended as an application repository rather than an npm package.

