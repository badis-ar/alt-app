import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Inscription" };

// Page provisoire : le formulaire d'inscription arrive à l'étape 2.
export default function InscriptionPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-4 px-4 py-16">
      <h1 className="text-2xl font-bold">Inscription</h1>
      <p className="text-muted">Les inscriptions ouvrent bientôt.</p>
      <Link href="/" className="font-semibold text-primary underline">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
