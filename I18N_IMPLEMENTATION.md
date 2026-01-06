# Internationalization (i18n) Implementation Guide

## Overview
This document explains the i18n implementation for the KUBER website with English and Latvian language support.

## What Has Been Set Up

### 1. Core i18n Infrastructure
- ✅ `middleware.ts` - Handles language detection and routing
- ✅ `lib/i18n-config.ts` - Language configuration  
- ✅ `lib/dictionaries.ts` - Dictionary loader
- ✅ `lib/dictionaries/en.json` - English translations (complete)
- ✅ `lib/dictionaries/lv.json` - Latvian translations (complete)
- ✅ `components/language-switcher.tsx` - Language switcher component
- ✅ `app/[lang]/layout.tsx` - Language-aware layout

### 2. URL Structure
- English: `https://yoursite.com/en` or `/en/about`, `/en/services`, etc.
- Latvian: `https://yoursite.com/lv` or `/lv/about`, `/lv/services`, etc.
- Root `/` automatically redirects to `/en` (or user's browser language if Latvian)

## What Needs To Be Done

### Step 1: Move All Pages to [lang] Folder

Current structure:
```
app/
├── page.tsx
├── about/page.tsx
├── contact/page.tsx
└── services/
    ├── page.tsx
    ├── daily-cleaning/page.tsx
    ├── general-cleaning/page.tsx
    └── facility-support/page.tsx
```

New structure needed:
```
app/
└── [lang]/
    ├── page.tsx
    ├── about/page.tsx
    ├── contact/page.tsx
    └── services/
        ├── page.tsx
        ├── daily-cleaning/page.tsx
        ├── general-cleaning/page.tsx
        └── facility-support/page.tsx
```

### Step 2: Update Each Page Component

Each page needs to:
1. Accept `params: { lang: string }` prop
2. Call `getDictionary(params.lang)` to get translations
3. Use `dict` object instead of `siteConfig` for content

Example transformation:

**Before:**
```typescript
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const { home } = siteConfig;
  return <h1>{home.hero.headline}</h1>;
}
```

**After:**
```typescript
import { getDictionary } from "@/lib/dictionaries";

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang as any);
  return <h1>{dict.home.hero.headline}</h1>;
}
```

### Step 3: Update Components

**Header and Footer** need to accept `lang` prop and use translations.

**Contact Form** needs to use translations for labels, placeholders, and validation messages.

## Quick Start Instructions

### Option A: Automated (Recommended)

I can provide all updated files if you want me to continue the implementation.

### Option B: Manual

1. Create the `app/[lang]` directory
2. Move all existing pages from `app/` to `app/[lang]/`
3. Update each page to accept params and use getDictionary
4. Update header/footer components
5. Delete old `app/layout.tsx` (now in `app/[lang]/layout.tsx`)
6. Test both `/en` and `/lv` routes

## Testing

After implementation:
1. Visit `http://localhost:3000` - should redirect to `/en`
2. Visit `http://localhost:3000/lv` - should show Latvian content
3. Click language switcher - should toggle between EN/LV
4. Navigate through all pages in both languages
5. Test contact form in both languages

## Deployment

After pushing to GitHub, Vercel will automatically:
- Build both language versions
- Set up proper redirects
- Generate static pages for `/en/*` and `/lv/*`

No additional Vercel configuration needed!

## Current Status

- 🟢 Infrastructure: Complete
- 🟢 Translations: Complete (EN & LV)
- 🟡 Pages: Need to be moved and updated
- 🟡 Components: Need to accept lang prop

## Next Steps

Would you like me to:
1. **Complete the full implementation** (I'll update all files)
2. **Provide step-by-step instructions** for you to do manually
3. **Create a migration script** to help automate the process

Let me know and I'll proceed!

