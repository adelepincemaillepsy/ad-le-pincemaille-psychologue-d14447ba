import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, CalendarCheck, CheckCircle2 } from "lucide-react";

type SelectedSlot = { date: Date; time: string };
type SubmittedInfo = { name: string; email: string; phone: string; message: string };

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Adèle Pincemaille, Psychologue" },
      {
        name: "description",
        content:
          "Prenez rendez-vous en ligne ou par téléphone avec Adèle Pincemaille, psychologue clinicienne à Vendenheim. Consultations les mardis, mercredis et jeudis.",
      },
    ],
  }),
  component: RendezVousPage,
});

// Créneaux disponibles : mardi 13h30–20h, mercredi 8h–20h, jeudi 8h–13h30
const AVAILABLE_SLOTS_BY_DAY: Record<number, string[]> = {
  2: ["13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"],
  3: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "19:30"],
  4: ["08:00", "09:00", "10:00", "11:00", "12:00"],
};

const DAY_LABELS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const MONTH_LABELS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

function startOfWeek(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay(); // 0 = dim, 1 = lun
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

const OPENING_DATE = new Date(2026, 5, 1); // 1er juin 2026

function isPast(d: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const min = today < OPENING_DATE ? OPENING_DATE : today;
  return d < min;
}

function formatRange(start: Date) {
  const end = addDays(start, 6);
  const sameMonth = start.getMonth() === end.getMonth();
  if (sameMonth) {
    return `${start.getDate()} – ${end.getDate()} ${MONTH_LABELS[end.getMonth()]} ${end.getFullYear()}`;
  }
  return `${start.getDate()} ${MONTH_LABELS[start.getMonth()]} – ${end.getDate()} ${MONTH_LABELS[end.getMonth()]} ${end.getFullYear()}`;
}

function RendezVousPage() {
  const [weekStart, setWeekStart] = useState(() => {
    const now = new Date();
    return startOfWeek(now < OPENING_DATE ? OPENING_DATE : now);
  });
  const [selected, setSelected] = useState<{ date: Date; time: string } | null>(null);

  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
    [weekStart]
  );

  return (
    <section className="container-wide py-16 sm:py-24">
      <header className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Réservation</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl text-foreground">
          Prendre rendez-vous
        </h1>
        <p className="mt-6 text-base text-muted-foreground">
          Réservez un créneau directement en ligne, ou contactez-moi par téléphone.
        </p>
      </header>

      {/* Option téléphone */}
      <div className="mt-10 mx-auto max-w-2xl rounded-lg border border-border/60 bg-secondary/40 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-accent/15 p-3">
            <Phone className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-serif text-lg text-foreground">Par téléphone</p>
            <p className="text-sm text-muted-foreground">
              N'hésitez pas à laisser un message, je vous rappelle.
            </p>
          </div>
        </div>
        <a
          href="tel:+33749217835"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          07 49 21 78 35
        </a>
      </div>

      {/* Calendrier hebdomadaire */}
      <div className="mt-12 rounded-lg border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-serif text-2xl text-foreground">
            Semaine du {formatRange(weekStart)}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setWeekStart(addDays(weekStart, -7))}
              disabled={isPast(addDays(weekStart, -1))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Semaine précédente"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setWeekStart(addDays(weekStart, 7))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-secondary"
              aria-label="Semaine suivante"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {days.map((day) => {
            const dow = day.getDay(); // 0..6 (dim..sam)
            const isAvailableDay = dow === 2 || dow === 3 || dow === 4;
            const past = isPast(day);
            const slots = isAvailableDay && !past ? AVAILABLE_SLOTS_BY_DAY[dow] ?? [] : [];

            return (
              <div
                key={day.toISOString()}
                className={[
                  "rounded-md border p-3 transition-colors",
                  isAvailableDay && !past
                    ? "border-accent/40 bg-accent/5"
                    : "border-border/60 bg-muted/40",
                  past && "opacity-50",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="text-center">
                  <p
                    className={[
                      "text-[11px] uppercase tracking-[0.15em]",
                      isAvailableDay && !past ? "text-accent" : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {DAY_LABELS[(dow + 6) % 7]}
                  </p>
                  <p className="mt-1 font-serif text-2xl text-foreground">
                    {day.getDate()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {MONTH_LABELS[day.getMonth()].slice(0, 3)}.
                  </p>
                </div>

                <div className="mt-4 space-y-1.5">
                  {slots.length > 0 ? (
                    slots.map((t) => {
                      const active =
                        selected?.date.toDateString() === day.toDateString() &&
                        selected?.time === t;
                      return (
                        <button
                          key={t}
                          onClick={() => setSelected({ date: day, time: t })}
                          className={[
                            "w-full rounded px-2 py-1.5 text-xs font-medium transition-all",
                            active
                              ? "bg-primary text-primary-foreground"
                              : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
                          ].join(" ")}
                        >
                          {t}
                        </button>
                      );
                    })
                  ) : (
                    <p className="text-center text-[11px] text-muted-foreground italic py-2">
                      {past ? "—" : isAvailableDay ? "Complet" : "Fermé"}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Légende */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm border border-accent/40 bg-accent/15" />
            Jours de consultation
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-primary" />
            Créneau sélectionné
          </span>
        </div>
      </div>

      {/* Récap sélection + formulaire de coordonnées */}
      {selected && (
        <BookingForm
          selected={selected}
          submitted={submitted}
          onSubmit={setSubmitted}
          onReset={() => {
            setSelected(null);
            setSubmitted(null);
          }}
        />
      )}

      <p className="mt-12 text-center text-xs text-muted-foreground italic max-w-xl mx-auto">
        Les créneaux affichés sont indicatifs. Une fois Lovable Cloud activé, vous
        pourrez gérer votre planning réel et synchroniser vos disponibilités depuis un
        espace administrateur.
      </p>
    </section>
  );
}
