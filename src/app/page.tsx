import Link from "next/link";
import { signupHref } from "@/lib/site";

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-4 py-16">
      <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
        L&apos;alternance, sans envoyer cent candidatures.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-muted">
        Candidat, créez votre profil une seule fois et laissez les entreprises venir à vous.
        Recruteur, trouvez en quelques minutes les alternants qui correspondent au niveau, au
        rythme, au lieu et aux compétences recherchés.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={signupHref("candidat")}
          className="rounded-lg bg-primary px-6 py-3 text-center font-semibold text-primary-foreground hover:bg-primary-hover"
        >
          Je cherche une alternance
        </Link>
        <Link
          href={signupHref("recruteur")}
          className="rounded-lg border-2 border-primary px-6 py-3 text-center font-semibold text-primary hover:bg-primary-soft"
        >
          Je recrute un alternant
        </Link>
      </div>
    </section>
  );
}
