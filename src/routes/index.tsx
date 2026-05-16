import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait-placeholder.jpg";
import heroTexture from "@/assets/hero-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Présentation — Adèle Pincemaille, Psychologue clinicienne" },
      {
        name: "description",
        content:
          "Découvrez Adèle Pincemaille, psychologue clinicienne à Vendenheim : parcours, formation et approche.",
      },
    ],
  }),
  component: PresentationPage,
});

function PresentationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <img
          src={heroTexture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="container-narrow relative py-20 sm:py-28 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Cabinet de Vendenheim</p>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl text-foreground leading-tight">
            Un espace de parole,<br />
            <em className="text-accent not-italic">d'écoute et de soin.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
            Adèle Pincemaille, psychologue clinicienne. Accompagnement des adultes,
            adolescents et enfants à partir de 12 ans.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/rendez-vous"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Prendre rendez-vous
            </Link>
            <Link
              to="/pour-qui"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background/60 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Découvrir l'approche
            </Link>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="container-narrow py-20 sm:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Présentation</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
              À propos de moi
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                Psychologue clinicienne diplômée, je reçois en cabinet à Vendenheim dans
                un cadre confidentiel et bienveillant.
              </p>
              <p className="text-muted-foreground italic">
                [Espace à compléter — présentez ici votre parcours, vos études, vos
                expériences et votre approche thérapeutique. Ce texte est entièrement
                modifiable.]
              </p>
              <p className="text-muted-foreground italic">
                [Exemple : Diplômée d'un Master en psychologie clinique et
                psychopathologie de l'Université de…, j'ai exercé en institution
                pendant plusieurs années avant d'ouvrir mon cabinet en…]
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-lg bg-accent/15 translate-x-3 translate-y-3" />
              <img
                src={portrait}
                alt="Adèle Pincemaille, psychologue clinicienne"
                width={896}
                height={1152}
                className="w-full rounded-lg object-cover shadow-sm"
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground italic">
              [Remplacer par votre photo professionnelle]
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="container-narrow py-20">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { title: "Confidentialité", text: "Un espace protégé, soumis au secret professionnel." },
              { title: "Bienveillance", text: "Une écoute sans jugement, respectueuse de votre rythme." },
              { title: "Engagement", text: "Un accompagnement adapté à chaque histoire singulière." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-serif text-2xl text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
