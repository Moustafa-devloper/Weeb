# Moustfa — Portfolio

A bilingual Arabic/English portfolio starter using Next.js App Router, TypeScript, Tailwind CSS, next-intl, Prisma, and PostgreSQL. Arabic pages are rendered RTL; English pages are LTR. The initial portfolio copy and project entries are editable demo content, not claims about actual client work.

## Run locally

1. Install Node.js 20.9 or newer and PostgreSQL (or create a database on Neon/Supabase).
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL`.
3. Install dependencies with `npm install`.
4. Generate the Prisma client and sync the schema: `npm run db:generate && npm run db:push`.
5. Start the development server: `npm run dev`, then open `http://localhost:3000/en` or `/ar`.

The schema is included as the database foundation. Public project examples currently come from `src/lib/projects.ts`, allowing the pages to run before a database is configured.

## Stack and structure

- `src/app/[locale]`: locale-aware public pages and metadata.
- `src/i18n` + `messages`: locale routing and Arabic/English copy.
- `src/lib/projects.ts`: initial editable project examples.
- `prisma/schema.prisma`: content, users, messages, settings, media, audit, and privacy-conscious analytics models.

## Database hosting

Create a PostgreSQL database on Neon or Supabase and use its PostgreSQL connection string as `DATABASE_URL`. Keep credentials private. For serverless deployments, follow the provider's current pooled-connection guidance and use a direct connection for Prisma migrations when required.

## Deployment

Import the repository into Vercel, configure `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL` in the project environment variables, then deploy. Run `prisma db push` (or create and deploy reviewed Prisma migrations) against the production database before enabling database-backed features. Do not commit `.env` files or real admin credentials.

## Planned next stages

The foundation is intentionally staged: next add dynamic project/blog data and CRUD, then secured admin authentication (Google and/or credentials, role checks and 2FA), contact handling with Resend and rate limiting, storage integration, analytics dashboard, and Vitest/Playwright coverage. Admin routes must remain unavailable until authentication and authorization have been implemented and configured.
