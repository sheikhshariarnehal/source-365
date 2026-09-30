# 2. Elevate Next.js Application to Project Root

## Context
The cloned NextSaaS digital marketing template initially resided in a nested subfolder (`d:\Poject\SRC 365\digital-marketing`), while workspace docs (`docs/`, `GLOSSARY.md`, content files) sat at the workspace root (`d:\Poject\SRC 365`).

## Decision
We decided to relocate the Next.js application codebase from `digital-marketing/` directly into the project root directory.

## Consequences
- Development tooling (`npm run dev`, `next.config.ts`, `package.json`, Turbopack, Tailwind) runs directly from the repository root.
- Simplifies CI/CD and deployment targets (e.g. Vercel) by eliminating root directory configuration overrides.
- Nested paths and relative imports are streamlined.
