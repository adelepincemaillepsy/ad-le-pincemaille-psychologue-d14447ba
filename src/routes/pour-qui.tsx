import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pour-qui")({
  head: () => ({
    meta: [
      { title: "Pour qui ? — Adèle Pincemaille, Psychologue clinicienne" },
      {
        name: "description",
        content:
          "Adultes, adolescents et enfants à partir de 12 ans. Découvrez à qui s'adresse mon accompagnement psychothérapeutique.",
      },
    ],
  }),
  component: PourQuiPage,
});

function PourQuiPage() {
  return (
    <article className="container-narrow py-20 sm:py-28">
      <header className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">À qui je m'adresse</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl text-foreground">Pour qui ?</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Adultes, adolescents et enfants à partir de 12 ans.
        </p>
      </header>

      <div className="mt-16 space-y-12 text-base leading-relaxed text-foreground/85">
        <p className="text-muted-foreground italic">
          [Espace à compléter — vous pouvez détailler ici votre pratique, le public
          accompagné, vos spécialisations.]
        </p>

        <p className="text-xl font-serif leading-relaxed text-foreground">
          Mon travail s'adresse aux personnes qui ressentent le besoin d'entamer un
          travail psychothérapeutique, qu'elles traversent une période de mal-être, de
          tristesse, d'angoisse, de dépression, de souffrance psychique, qu'elles soient
          confrontées à un événement traumatique ou qu'elles aient le sentiment d'être
          dans une impasse plus diffuse, parfois difficile à saisir.
        </p>

        <div className="rounded-lg border border-border/60 bg-secondary/40 p-8 sm:p-10">
          <p>
            Il peut arriver qu'un ou plusieurs symptômes prennent trop de place dans la
            vie quotidienne et aient un impact sur la vie privée, affective ou
            professionnelle. Dans ces cas la psychothérapie peut s'avérer être un
            véritable levier de changement et de soulagement.
          </p>
        </div>

        <p>
          Mon travail consiste à proposer un espace de parole et d'écoute, confidentiel,
          bienveillant et sans jugement. Un espace où ce qui fait souffrance peut se
          dire, se déposer, et peu à peu se remanier.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/rendez-vous"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </article>
  );
}
