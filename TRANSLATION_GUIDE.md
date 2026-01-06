# Google Translate Integration Guide

## What Is This?

Your KUBER website now has **automatic translation** powered by Google Translate. Visitors can click a language selector in the header and the entire website translates automatically.

## How It Works

1. **You maintain content in English** (or any single language)
2. **Google Translate automatically translates** to Latvian (or any language you configure)
3. **No need to update multiple files** - change content once, translation updates automatically

## What's Been Added

### Files Created:
- `components/google-translate.tsx` - The translation widget component
- `app/google-translate-styles.css` - Styling for the widget

### Files Modified:
- `components/header.tsx` - Now includes the Google Translate widget
- `app/globals.css` - Imports the translation styles
- `package.json` - Removed server-only dependency (no longer needed)

## Features

✅ **Automatic translation** to Latvian (LV) and English (EN)
✅ **Simple dropdown** in the header
✅ **No maintenance** - update content once
✅ **Free** - powered by Google Translate
✅ **User preference saved** - Google remembers user's language choice

## How Users See It

1. Visit the website → sees English by default
2. Click the language dropdown in the header
3. Select "Latvian" → entire page translates
4. Navigate to other pages → stays in Latvian
5. Language preference is remembered across visits

## Customizing Languages

Want to add more languages? Edit `components/google-translate.tsx`:

```typescript
includedLanguages: "en,lv,ru,de,et",  // Add more language codes
```

Common codes:
- `en` - English
- `lv` - Latvian
- `ru` - Russian
- `de` - German
- `et` - Estonian
- `lt` - Lithuanian

## Advantages of This Approach

✅ **Simple** - No complex routing or duplicate content
✅ **Automatic** - Google handles translation
✅ **Maintainable** - Update content in one place
✅ **Cost-free** - No translation service fees
✅ **Works everywhere** - All pages, forms, buttons translate

## Limitations

⚠️ **Translation quality** - Google Translate is good but not perfect for business content
⚠️ **SEO** - Search engines see only the original language
⚠️ **Professional content** - For critical business text, manual translation is better

## Alternative: Professional Translation

If you need perfect Latvian for business communication, you can:
1. Keep this Google Translate for quick browsing
2. Add manually translated Latvian pages for key sections (About, Services)
3. Use a professional translation service

## Testing

1. Run `npm run dev`
2. Open http://localhost:3000
3. Look for the language dropdown in the header (top right)
4. Select "Latvian"
5. Watch the page translate!

## Deployment

Just push to GitHub - Vercel will deploy with Google Translate automatically:

```bash
git add .
git commit -m "Add Google Translate for Latvian"
git push
```

Your live site will have the translation dropdown immediately!

## Troubleshooting

**Language dropdown not showing?**
- Check browser console for errors
- Make sure JavaScript is enabled
- Try hard refresh (Cmd/Ctrl + Shift + R)

**Translation not working?**
- Google Translate requires internet connection
- Some ad blockers may block Google Translate
- Check if the script loads in browser dev tools

**Want to remove it?**
- Delete `components/google-translate.tsx`
- Remove `<GoogleTranslate />` from `components/header.tsx`
- Remove the import from `app/globals.css`

## That's It!

Your website now supports automatic translation. Just maintain content in English and Google handles the rest. 🎉

