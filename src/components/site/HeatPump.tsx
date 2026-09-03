import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heatPumpImage from "@/assets/waermepumpe.jpg";

const POINTS = [
  "Individuelle Prüfung",
  "Fördermöglichkeiten im Blick",
  "Fachgerechte Umsetzung",
];

export function HeatPump() {
  return (
    <section className="gradient-deep section-y text-deep-foreground">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-xl border border-deep-foreground/12 shadow-[var(--shadow-lift)]">
          <img
            src={heatPumpImage}
            alt="Moderne Wärmepumpe an der Außenwand eines Wohnhauses"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Schwerpunkt Wärmepumpe
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Wärmepumpe: Was für Ihr Haus wirklich sinnvoll ist
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-deep-foreground/75 sm:text-lg">
            Nicht jedes Gebäude stellt die gleichen Anforderungen. Wir prüfen
            die Gegebenheiten vor Ort und beraten Sie verständlich zu einer
            passenden Lösung.
          </p>

          <ul className="mt-8 space-y-3.5">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-[15px] font-medium">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button asChild variant="cta" size="xl">
              <a href="#kontakt">Wärmepumpe unverbindlich prüfen lassen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
