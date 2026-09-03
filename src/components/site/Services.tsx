import { Flame, Wind, ShowerHead, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    icon: Flame,
    title: "Heizungstechnik",
    text: "Moderne Heizsysteme, Wartung und Austausch bestehender Anlagen.",
  },
  {
    icon: Wind,
    title: "Wärmepumpen",
    text: "Individuelle Planung und Installation moderner Wärmepumpensysteme.",
  },
  {
    icon: ShowerHead,
    title: "Bad & Sanitär",
    text: "Badsanierung und Neugestaltung – von der Planung bis zur Ausführung.",
  },
  {
    icon: Wrench,
    title: "Wartung & Service",
    text: "Regelmäßige Wartung für einen zuverlässigen und effizienten Betrieb.",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="section-y bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Leistungen"
          title="Unsere Leistungen"
          subtitle="Von der Wärmepumpe bis zum neuen Bad – wir begleiten Ihr Projekt von der Planung bis zur Fertigstellung."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <article className="card-elevated group h-full rounded-xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-5.5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-card-foreground">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
