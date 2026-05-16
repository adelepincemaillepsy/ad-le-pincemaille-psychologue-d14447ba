import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { to: "/", label: "Présentation" },
  { to: "/pour-qui", label: "Pour qui ?" },
  { to: "/tarif-contact", label: "Tarif et contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl text-foreground">Adèle Pincemaille</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Psychologue clinicienne
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Menu
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link
                    to={item.to}
                    className="cursor-pointer text-sm"
                    activeProps={{ className: "bg-secondary font-medium" }}
                    activeOptions={{ exact: true }}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/rendez-vous"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-sm"
          >
            Prendre rendez-vous
          </Link>
        </nav>
      </div>
    </header>
  );
}
