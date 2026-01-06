# KUBER Ltd Website

Professional website for KUBER Ltd - a Latvian B2B facility services company providing cleaning and facility support services in Riga.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Validation**: React Hook Form + Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kuber
```

2. Install dependencies:
```bash
npm install
```

3. Add the KUBER logo:
   - Place your logo file at: `/public/brand/kuber-logo.svg` (or `.png`)
   - A placeholder SVG logo is included - replace with your actual brand logo
   - Recommended size: 280x80 pixels (or similar aspect ratio)
   - If using PNG, update the src paths in `header.tsx` and `footer.tsx`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
kuber/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   └── services/          # Services pages
│       ├── page.tsx       # Services overview
│       ├── daily-cleaning/
│       ├── general-cleaning/
│       └── facility-support/
├── components/            # Reusable React components
│   ├── button.tsx
│   ├── card.tsx
│   ├── collapsible.tsx
│   ├── contact-form.tsx
│   ├── container.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── section.tsx
│   ├── service-card.tsx
│   └── service-page-template.tsx
├── lib/
│   ├── site-config.ts     # All content and company data
│   └── utils.ts           # Utility functions
├── public/
│   └── brand/             # Brand assets (logo)
└── ...config files
```

## Configuration

All website content, company details, and copy are stored in a single configuration file:

**`/lib/site-config.ts`**

Edit this file to update:
- Company information (name, address, phone, email)
- Navigation structure
- Page content and copy
- Service descriptions
- SEO metadata

## Brand Colors

The website uses a color palette extracted from the KUBER logo:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#2A7AC1` | Main brand blue, buttons, links |
| Primary 600 | `#1F66A6` | Hover states |
| Secondary | `#559DD1` | Supporting blue |
| Tertiary | `#93BFE1` | Light blue backgrounds |
| Surface | `#ECF1F4` | Section backgrounds |
| Background | `#FFFFFF` | Page background |
| Text | `#0B1B2A` | Main text |
| Muted Text | `#4B5B6B` | Secondary text |
| Border | `#D9E2EA` | Borders and dividers |

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags and Open Graph
- ✅ Accessible with proper heading hierarchy and focus states
- ✅ Contact form with validation
- ✅ Clean, corporate design
- ✅ Easy content management via config file

## TODOs

- [ ] Implement i18n for LV/EN language switcher
- [ ] Connect contact form to backend/email service
- [ ] Update Google Maps embed with actual API key
- [ ] Add real client logos/testimonials when available
- [ ] Add certifications/insurance info when available

## Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## License

© 2024 SIA "KUBER Ltd". All rights reserved.

