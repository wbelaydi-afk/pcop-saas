# PCOP Full SaaS — Private Commodity Operations Platform

Application SaaS institutionnelle pour CRM commodities, workflow, utilisateurs, documents/PDF, compliance et dashboards.

## Déploiement Vercel

1. Dézipper ce dossier.
2. Uploader le CONTENU du dossier à la racine du repository GitHub.
3. Dans Vercel : Add New > Project > Import `pcop-saas`.
4. Framework détecté : Next.js.
5. Cliquer Deploy.
6. Ouvrir `/app` si la page d'accueil ne s'ouvre pas directement.

## Variables optionnelles Supabase

Copier `.env.example` en `.env.local` puis renseigner :

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Fonctionnalités incluses

- Dashboard exécutif
- CRM transactions
- Workflow engine
- Accès salariés / rôles
- Document studio éditable
- Export PDF via impression navigateur
- Supabase-ready
- SQL schema multi-tenant
- Design premium vert d’eau / blanc cassé

## Important

Cette version fonctionne immédiatement comme SaaS front-end démonstrateur. Pour une production complète avec vraie base clients, il faut brancher Supabase Auth + PostgreSQL + Storage.
