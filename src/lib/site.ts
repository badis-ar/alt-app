// Informations générales du site, partagées entre les pages.

export const SITE_NAME = "AltApp";

export const SITE_DESCRIPTION =
  "La plateforme dédiée à l'alternance : les candidats créent un profil complet une seule fois, les recruteurs trouvent en quelques minutes les profils qui leur correspondent.";

/** Rôles qui peuvent s'inscrire eux-mêmes (l'administrateur est créé à part). */
export const SIGNUP_ROLES = ["candidat", "recruteur"] as const;
export type SignupRole = (typeof SIGNUP_ROLES)[number];

export function isSignupRole(value: unknown): value is SignupRole {
  return typeof value === "string" && (SIGNUP_ROLES as readonly string[]).includes(value);
}

/** Lien d'inscription pour un rôle donné. */
export function signupHref(role: SignupRole): string {
  return `/inscription?role=${role}`;
}
