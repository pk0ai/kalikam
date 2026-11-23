# KALIKAM Editorial V2
Modern magazine-style Next.js starter for deployment on Vercel.

## Deploy
1. Upload the files in this project to your GitHub repository (root contents, not the ZIP).
2. Import the repository into Vercel.
3. Framework: Next.js; Root Directory: the directory containing package.json (use `kalikam-vercel` only if the project is nested there).
4. Build command/output directory: defaults.
5. Deploy.

## Current functionality
- Responsive editorial homepage
- Featured and secondary stories
- Search and section filtering
- Static article pages
- Editor interface prototype
- Sample content stored in `lib/articles.ts`

## CMS limitations
Editor is UI-only and does not save or publish. Newsletter is a demo form. Next phase: connect Supabase for auth, database, media storage, article CRUD, publish states and bilingual fields.
