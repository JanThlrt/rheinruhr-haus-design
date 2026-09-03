import { Award, MapPin, MessagesSquare, PiggyBank } from "lucide-react";

const ITEMS = [
  { icon: Award, label: "Meisterbetrieb" },
  { icon: MapPin, label: "Regional in Düsseldorf & Umgebung" },
  { icon: MessagesSquare, label: "Transparente Beratung" },
  { icon: PiggyBank, label: "Unterstützung bei Fördermöglichkeiten" },
];

export function TrustBar() {
  return (
    <section aria-label="Vertrauensmerkmale" className="border-y border-border bg-background">
      <div className="container-page grid grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3.5 py-5 sm:px-1 lg:px-4"
          >
            <Icon
              className="size-5 shrink-0 text-accent"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <span className="text-sm font-semibold leading-snug text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
