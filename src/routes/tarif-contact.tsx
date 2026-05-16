import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, CreditCard, Banknote, XCircle } from "lucide-react";
import cabinetInterior from "@/assets/cabinet-interior.jpg";
import cabinetExterior from "@/assets/cabinet-exterior.jpg";

export const Route = createFileRoute("/tarif-contact")({
  head: () => ({
    meta: [
      { title: "Tarif et contact — Adèle Pincemaille, Psychologue clinicienne" },
      {
        name: "description",
        content:
          "Entretien individuel 60 €. Dispositif Mon Soutien Étudiant. Cabinet au 19 rue de la Forêt, Vendenheim.",
      },
    ],
  }),
  component: TarifContactPage,
});

function TarifContactPage() {
  return (
    <article className="container-narrow py-20 sm:py-28">
      <header className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Informations pratiques</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl text-foreground">
          Tarif et contact
        </h1>
      </header>

      {/* Tarifs */}
      <section className="mt-16 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-border/60 bg-card p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Consultation</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground">Entretien individuel</h2>
          <p className="mt-4 font-serif text-5xl text-foreground">
            60 <span className="text-2xl text-muted-foreground">€</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Séance d'environ 45 minutes.</p>
        </div>
        <div className="rounded-lg border border-border/60 bg-secondary/40 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Dispositif</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground">Mon Soutien Étudiant</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80">
            Je suis conventionnée dans le cadre du dispositif Mon Soutien Étudiant,
            permettant aux étudiants de bénéficier de séances prises en charge.
          </p>
        </div>
      </section>

      {/* Cabinet — photos */}
      <section className="mt-20">
        <h2 className="font-serif text-3xl text-foreground text-center">Le cabinet</h2>
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
      </section>

      {/* Accès & paiement */}
      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border/60 bg-card p-8">
          <h2 className="font-serif text-2xl text-foreground">Accès au cabinet</h2>
          <div className="mt-4 space-y-3 text-sm text-foreground/85">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>19 rue de la Forêt<br />67550 Vendenheim</span>
            </p>
            <p className="text-muted-foreground italic">
              [Espace à compléter — précisions sur l'accès, stationnement, transports en
              commun, étage, accessibilité.]
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border/60 bg-card p-8">
          <h2 className="font-serif text-2xl text-foreground">Moyens de paiement</h2>
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
      </section>

      {/* Annulation */}
      <section className="mt-12 rounded-lg border border-accent/30 bg-accent/5 p-8">
        <h2 className="font-serif text-2xl text-foreground">Annulation</h2>
        <p className="mt-4 text-sm leading-relaxed text-foreground/85">
          Toute consultation non honorée ou annulée moins de 48h à l'avance reste due.
          Ce cadre me permet de vous accueillir dans de bonnes conditions et de
          préserver un fonctionnement respectueux pour chacun·e. Merci pour votre
          compréhension.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-20 rounded-lg bg-primary p-10 text-primary-foreground">
        <h2 className="font-serif text-3xl text-center">Me contacter</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <a
            href="tel:+33000000000"
            className="flex items-center gap-4 rounded-md bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-5 w-5" />
            <div>
              <p className="text-xs uppercase tracking-[0.15em] opacity-70">Téléphone</p>
              <p className="mt-1 text-sm">(numéro pro)</p>
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
      </section>
    </article>
  );
}
