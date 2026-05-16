import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-foreground">Adèle Pincemaille</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Psychologue clinicienne
            </p>
          </div>

          <div className="space-y-3 text-sm text-foreground/80">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Espace Santé<br />19 rue de la Forêt<br />67550 Vendenheim</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>(numéro pro)</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a
                href="mailto:adelepincemaille.psy@gmail.com"
                className="hover:text-accent transition-colors"
              >
                adelepincemaille.psy@gmail.com
              </a>
            </p>
          </div>

          <div className="md:text-right">
            <Link
              to="/rendez-vous"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Adèle Pincemaille — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
