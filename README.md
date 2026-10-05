# Lone Baithei — Personal Intelligence & Career Platform

Information-first portfolio + private admin/CMS + lightweight project tracker.
Spec: `Lone_Baithei_Portfolio_Project_Specification.md` (v1.0.0).

Stack: Next.js 16 · TypeScript · Tailwind 4 · PostgreSQL · Prisma 7 · Auth.js (credentials, JWT).

## Setup
```bash
npm install
cp .env.example .env          # fill DATABASE_URL, AUTH_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed            # creates the admin user + empty profile
npm run dev
```
Admin: `/admin` (redirects to `/admin/login`). Public data comes only from the database; nothing is hard-coded.

## Status (Phase 1 + Phase 2 skeleton)
- [x] Schema for all spec §36 entities (+ `NowEntry`)
- [x] Auth.js login, `proxy.ts` gate, `requireAdmin()` re-check in admin layout/pages
- [x] Public: Home, About, CV, Projects, Project detail, Now, Contact (empty states, no fake data)
- [x] Admin: login, dashboard summary
- [ ] Admin CRUD (profile, projects + milestones, Now, skills, education, certs), draft/publish — Phase 3/4
- [ ] Resume upload/versioning — blocked on storage choice (Supabase Storage vs R2 vs S3)
- [ ] Login rate limiting, upload validation, sitemap/robots, JSON-LD, accessibility audit — Phase 5

Security notes: public queries use explicit `select` (see `lib/db/queries.ts`) so `privateNotes` and other private fields cannot leak.
