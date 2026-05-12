# Private Commodity Operations Platform — Full SaaS Deployable MVP

Application SaaS premium pour desk commodities : CRM, workflows, accès salariés, documents PDF, compliance, banking, shipping, reporting et audit trail.

## Ce qui est inclus

- Next.js App Router
- Tailwind design system vert d'eau / blanc cassé
- Dashboard exécutif
- CRM transactions
- Workflow engine
- Employee hub et rôles utilisateurs
- Document & PDF Studio avec impression PDF navigateur
- Supabase-ready : database, auth, RLS-ready
- Vercel-ready
- Schema PostgreSQL inclus
- Guide d'utilisation salarié

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir : `http://localhost:3000`

## Mettre en ligne sur Vercel

1. Créer un repo GitHub.
2. Envoyer ce dossier sur GitHub.
3. Aller sur Vercel → New Project.
4. Importer le repo.
5. Ajouter les variables dans `.env.example`.
6. Cliquer Deploy.

## Connecter Supabase

1. Créer un projet Supabase.
2. Aller dans SQL Editor.
3. Copier/coller `supabase/schema.sql`.
4. Récupérer `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Les ajouter dans Vercel.

## Productivité cible

L'objectif de 89% correspond à la réduction visée du temps perdu sur :

- doubles saisies ;
- suivi manuel des documents ;
- recherche de fichiers ;
- relances internes ;
- génération répétitive de PDF ;
- absence de visibilité workflow ;
- reporting manuel.

## Prochaine version recommandée

- Auth Supabase active avec login
- CRUD réel deals / documents / users
- Upload storage documents
- Génération PDF serveur
- Signature électronique
- Notifications email
- Audit logs automatiques
- Multi-tenant complet
