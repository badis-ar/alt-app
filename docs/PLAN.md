# Plan du MVP

Une branche par étape, fusionnée dans `main` après test (CI verte + vérification sur la
prévisualisation).

| # | Branche | Contenu |
|---|---|---|
| 0 | `etape-0-init` | Next.js + TypeScript + Tailwind, CI (lint, types, tests), `.env.example`, page d'accueil |
| 1 | `etape-1-base-de-donnees` | Migrations Supabase : tables, listes fermées, index, plein texte, règles d'accès (RLS), stockage privé des CV |
| 2 | `etape-2-comptes` | Inscription / connexion, choix du rôle, confirmation email, consentement, 16 ans minimum, recruteur avec SIRET en attente de validation |
| 3 | `etape-3-profil-candidat` | Formulaire en étapes, CV PDF (5 Mo max), complétude, visibilité, pause / suppression |
| 4 | `etape-4-admin` | Validation des recruteurs, signalements, demandes RGPD |
| 5 | `etape-5-recherche` | Filtres principaux, compteur en direct, tri, cartes, fiche anonymisée côté base, journal des accès, test 10 000 profils < 2 s |
| 6 | `etape-6-messagerie` | Contact avec limite par jour, acceptation / refus, coordonnées et CV débloqués après accord |
| 7 | `etape-7-rgpd-finitions` | Export, suppression réelle, purge après 12 mois d'inactivité, pages légales, accessibilité |
| 8 | `etape-8-mise-en-ligne` | Production Vercel (`*.vercel.app`), emails, sauvegardes chiffrées quotidiennes, maintien en éveil de Supabase |

## Contraintes

- Coût 0 € : uniquement des offres gratuites.
- Service gratuit pour les utilisateurs. Dons : sujet reporté à plus tard.
- Aucun secret dans le code : variables d'environnement et secrets des services.
- Confidentialité appliquée dans la base (RLS), pas seulement à l'écran.

## Version 2 (après le MVP)

Favoris, recherches enregistrées et alertes email, suivi des contacts côté recruteur,
statistiques de vues, import depuis un CV PDF.
