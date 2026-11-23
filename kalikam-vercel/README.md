# KALIKAM — Vercel editorial website


## Run locally
1. Install Node.js 20+.
2. Open this project directory in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload these project files.
2. Import that repository at https://vercel.com/new.
3. Vercel will detect Next.js. Keep the default build settings and click Deploy.

## Current prototype
- Responsive editorial homepage
- Category exploration links
- Article detail pages with static sample content
- Draft editor interface (preview only, not connected to database)

## Next build steps for production CMS
- Connect Supabase for articles, authors, categories, user authentication and image storage.
- Replace the demo editor with authenticated create/edit/publish controls.
- Add real newsletter provider integration and form validation.
- Add multilingual Malayalam/English fields and SEO metadata per article.
- Add moderation/roles and scheduled publishing.
