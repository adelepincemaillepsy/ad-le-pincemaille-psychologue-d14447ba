import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

const sections = [
  { id: "presentation", label: "Présentation" },
  { id: "pour-qui", label: "Pour qui ?" },
  { id: "tarif-contact", label: "Tarif et contact" },
] as const;

export function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  const handleAnchor = (e: React.MouseEvent, id: string) => {
    if (onHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
      }
    } else {
      e.preventDefault();
      navigate({ to: "/", hash: id });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      {/* Bandeau coordonnées */}
      <div className="hidden md:block border-b border-border/40 bg-secondary/30">
        <div className="container-wide flex h-9 items-center justify-end gap-6 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-accent" />
            19 rue de la Forêt, 67550 Vendenheim
          </span>
          <a href="tel:+33000000000" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Phone className="h-3 w-3 text-accent" />
            (numéro pro)
          </a>
          <a href="mailto:adelepincemaille.psy@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Mail className="h-3 w-3 text-accent" />
            adelepincemaille.psy@gmail.com
          </a>
        </div>
      </div>
      <div className="md:hidden border-b border-border/40 bg-secondary/30">
        <div className="container-wide flex items-center justify-center gap-4 py-1.5 text-[11px] text-muted-foreground">
          <a href="tel:+33000000000" className="flex items-center gap-1 hover:text-foreground">
            <Phone className="h-3 w-3 text-accent" /> Téléphone
          </a>
          <a href="mailto:adelepincemaille.psy@gmail.com" className="flex items-center gap-1 hover:text-foreground">
            <Mail className="h-3 w-3 text-accent" /> Email
          </a>
        </div>
      </div>

      <div className="container-wide flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl text-foreground">Adèle Pincemaille</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Psychologue clinicienne
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`/#${s.id}`}
                  onClick={(e) => handleAnchor(e, s.id)}
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            to="/rendez-vous"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-sm"
          >
            Prendre rendez-vous
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden border-t border-border/60 bg-background/60">
        <ul className="container-wide flex items-center justify-between gap-1 py-2 overflow-x-auto">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`/#${s.id}`}
                onClick={(e) => handleAnchor(e, s.id)}
                className="inline-flex items-center rounded-md px-2.5 py-1.5 text-xs font-medium text-foreground/80 whitespace-nowrap hover:bg-secondary"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
