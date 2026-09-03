import { SectionHeading } from "./SectionHeading";
import heatPumpImage from "@/assets/waermepumpe.jpg";
import heatingImage from "@/assets/heizung.jpg";
import bathImage from "@/assets/bad.jpg";

const PROJECTS = [
  {
    image: heatPumpImage,
    alt: "Außeneinheit einer Wärmepumpe an einem Einfamilienhaus",
    tag: "Wärmepumpe",
    title: "Wärmepumpen-Modernisierung",
    text: "Austausch einer alten Öl-Heizung gegen eine Luft-Wasser-Wärmepumpe im Einfamilienhaus, inklusive Anpassung der Heizflächen.",
    w: 1408,
    h: 1008,
  },
  {
    image: heatingImage,
    alt: "Moderne Heizungsanlage in einem aufgeräumten Technikraum",
    tag: "Heizung",
    title: "Moderne Heizungsanlage",
    text: "Erneuerung der Heizzentrale im Reihenhaus mit neuer Regelung, hydraulischem Abgleich und sauber geführter Verrohrung.",
    w: 1200,
    h: 900,
  },
  {
    image: bathImage,
    alt: "Neu saniertes modernes Badezimmer mit bodengleicher Dusche",
    tag: "Bad & Sanitär",
    title: "Badsanierung",
    text: "Komplette Neugestaltung eines Familienbads mit bodengleicher Dusche, neuer Sanitärinstallation und barrierearmer Planung.",
    w: 1200,
    h: 900,
  },
];

export function Projects() {
  return (
    <section id="referenzen" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Referenzprojekte"
          title="Einblick in typische Projekte"
          subtitle="Beispielprojekte, die zeigen, wie wir arbeiten – von der Planung bis zur Abnahme."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <article className="card-elevated group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={project.w}
                    height={project.h}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {project.tag}
                  </span>
                  <h3 className="mt-2.5 text-lg font-bold text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {project.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Hinweis: RheinRuhr Haustechnik ist ein fiktiver Musterbetrieb. Die
          gezeigten Referenzen sind Beispielprojekte zur Veranschaulichung.
        </p>
      </div>
    </section>
  );
}
