# alt-app — Plateforme de CV pour l'alternance

Site qui met en relation des candidats en recherche d'alternance et des recruteurs.
Le recruteur cherche directement les profils grâce à des filtres précis ; le candidat
garde le contrôle sur ce qui est visible.

Service gratuit pour les utilisateurs. Coût d'hébergement visé : 0 € (offres gratuites).

## Stack

| Besoin | Choix |
|---|---|
| Site (pages + API) | Next.js + TypeScript |
| Style | Tailwind CSS |
| Base, comptes, fichiers CV | Supabase (offre gratuite, région UE) |
| Hébergement | Vercel (offre gratuite) |
| Tests | Vitest + GitHub Actions |

## Développement

Le travail se fait dans des environnements cloud (Claude Code, GitHub Codespaces), jamais
sur un ordinateur personnel.

```bash
npm ci
npm run dev        # serveur de développement
npm run check      # lint + types + tests
```

Les variables d'environnement sont listées dans `.env.example`. Les vraies valeurs vont
dans les secrets GitHub / Supabase / Vercel, **jamais dans le code**.

## Organisation

Une branche par étape du MVP, fusionnée dans `main` après test. Voir [`docs/PLAN.md`](docs/PLAN.md).
