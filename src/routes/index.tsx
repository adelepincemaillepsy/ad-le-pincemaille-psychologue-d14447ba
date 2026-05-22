import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, CreditCard, Banknote, XCircle } from "lucide-react";
import portrait from "@/assets/portrait-placeholder.jpg";
import heroTexture from "@/assets/hero-texture.jpg";
import cabinetInterior from "@/assets/cabinet-interior.jpg";
import cabinetExterior from "@/assets/cabinet-exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adèle Pincemaille — Psychologue clinicienne à Vendenheim" },
      {
        name: "description",
        content:
          "Adèle Pincemaille, psychologue clinicienne à Vendenheim. Présentation, public accompagné, tarifs et contact.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
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
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Cabinet à Vendenheim</p>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl text-foreground leading-tight">
            Un espace de parole,<br />
            <em className="text-accent not-italic">d'écoute et de soin.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Adèle Pincemaille</span>, <span className="font-semibold text-foreground">psychologue clinicienne</span>.<br />
            Accompagnement des adultes, adolescents et enfants à partir de 12 ans.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section id="presentation" className="container-narrow py-20 sm:py-28 scroll-mt-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Présentation</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground">
              À mon propos
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
          <div className="order-1 md:order-2 mx-auto w-full max-w-[260px] md:max-w-[300px]">
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

      {/* Pour qui */}
      <section id="pour-qui" className="border-t border-border/60 scroll-mt-24">
        <article className="container-narrow py-20 sm:py-28">
          <header className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Pour qui ?</p>
            <h2 className="mt-4 font-serif sm:text-6xl text-foreground text-4xl">À qui je m'adresse</h2>
          </header>

          <div className="mt-16 rounded-lg border border-border/60 bg-secondary/40 p-8 sm:p-10 space-y-5 text-base leading-relaxed text-foreground/85 text-justify">
            <p>
              J'accompagne les adultes, les adolescents et les enfants à partir de 12 ans.
            </p>
            <p>
              Mon travail s'adresse aux personnes qui ressentent le besoin d'entamer un
              travail psychothérapeutique, qu'elles traversent une période de mal-être, de
              tristesse, d'angoisse, de dépression, de souffrance psychique, qu'elles soient
              confrontées à un événement traumatique ou qu'elles aient le sentiment d'être
              dans une impasse plus diffuse, parfois difficile à saisir.
            </p>
            <p>
              Il peut arriver qu'un ou plusieurs symptômes prennent trop de place dans la
              vie quotidienne et aient un impact sur la vie privée, affective ou
              professionnelle. Dans ces cas la psychothérapie peut s'avérer être un
              véritable levier de changement et de soulagement.
            </p>
            <p>
              Mon travail consiste à proposer un espace de parole et d'écoute, confidentiel,
              bienveillant et sans jugement. Un espace où ce qui fait souffrance peut se
              dire, se déposer, et peu à peu se remanier.
            </p>
          </div>
        </article>
      </section>

      {/* Tarif et contact */}
      <section id="tarif-contact" className="border-t border-border/60 bg-secondary/20 scroll-mt-24">
        <article className="container-narrow py-20 sm:py-28">
          <header className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-accent text-xs">Informations pratiques</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground text-center">
              Tarif et contact
            </h2>
          </header>

          {/* Tarifs */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-card p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Consultation</p>
              <h3 className="mt-3 font-serif text-3xl text-foreground">Entretien individuel</h3>
              <p className="mt-4 font-serif text-5xl text-foreground">
                60 <span className="text-2xl text-muted-foreground">€</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">Séance d'environ 45 minutes.</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-secondary/40 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Dispositif</p>
              <h3 className="mt-3 font-serif text-3xl text-foreground">Prise en charge</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                Les consultations ne sont actuellement pas prises en charge dans le cadre des dispositifs Mon Soutien Psy et Santé Psy Étudiant.
              </p>
            </div>
          </div>

          {/* Moyens de paiement + Annulation */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-card p-8">
              <h3 className="font-serif text-2xl text-foreground">Moyens de paiement</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li className="flex items-center gap-3">
                  <CreditCard className="h-4 w-4 text-accent" />
                  Carte bancaire acceptée
                </li>
                <li className="flex items-center gap-3">
                  <Banknote className="h-4 w-4 text-accent" />
                  Espèces acceptées
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <XCircle className="h-4 w-4" />
                  Chèques non acceptés
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent/5 p-8">
              <h3 className="font-serif text-2xl text-foreground">Annulation</h3>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-foreground/85">
                Toute consultation non honorée ou annulée moins de 38h à l'avance reste due.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                Ce cadre me permet de vous accueillir dans de bonnes conditions et de
                préserver un fonctionnement respectueux pour chacun·e. Merci pour votre
                compréhension.
              </p>
            </div>
          </div>

          {/* Cabinet — photos */}
          <div className="mt-12">
            <h3 className="font-serif text-3xl text-foreground text-center">Le cabinet</h3>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <figure>
                <img
                  src={cabinetExterior}
                  alt="Façade extérieure du cabinet"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="w-full rounded-lg object-cover aspect-[4/3] shadow-sm"
                />
                <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">
                  Extérieur — [remplacer par votre photo]
                </figcaption>
              </figure>
              <figure>
                <img
                  src={cabinetInterior}
                  alt="Intérieur du bureau de consultation"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="w-full rounded-lg object-cover aspect-[4/3] shadow-sm"
                />
                <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">
                  Bureau de consultation — [remplacer par votre photo]
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Accès au cabinet */}
          <div className="mt-12 rounded-lg border border-border/60 bg-card p-8">
            <h3 className="font-serif text-2xl text-foreground">Accès au cabinet</h3>
            <div className="mt-4 space-y-3 text-sm text-foreground/85">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Pôle Santé<br />19 rue de la Forêt<br />67550 Vendenheim</span>
              </p>
              <p>
                Un parking de stationnement gratuit est disponible devant le Pôle Santé.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-20 rounded-lg bg-primary p-10 text-primary-foreground">
            <h3 className="font-serif text-3xl text-center">Me contacter</h3>
            <p className="mt-4 text-center text-sm leading-relaxed text-primary-foreground/80 max-w-2xl mx-auto">
              Prise de rendez-vous possible par téléphone ou via la plateforme en ligne.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <a
                href="tel:+33749217835"
                className="flex items-center gap-4 rounded-md bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-5 w-5" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] opacity-70">Téléphone</p>
                  <p className="mt-1 text-sm">07 49 21 78 35</p>
                </div>
              </a>
              <a
                href="mailto:adelepincemaille.psy@gmail.com"
                className="flex items-center gap-4 rounded-md bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10"
              >
                <Mail className="h-5 w-5" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] opacity-70">Email</p>
                  <p className="mt-1 text-sm break-all">adelepincemaille.psy@gmail.com</p>
                </div>
              </a>
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/rendez-vous"
                className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary-foreground/90"
              >
                Prendre rendez-vous en ligne
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
