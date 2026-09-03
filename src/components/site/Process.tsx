import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    no: "01",
    title: "Kontaktaufnahme",
    text: "Sie schildern uns Ihr Anliegen telefonisch oder über das Formular.",
  },
  {
    no: "02",
    title: "Vor-Ort-Termin",
    text: "Wir sehen uns die Gegebenheiten an und klären Ihre Fragen.",
  },
  {
    no: "03",
    title: "Individuelles Angebot",
    text: "Sie erhalten ein nachvollziehbar aufgeschlüsseltes Angebot.",
  },
  {
    no: "04",
    title: "Fachgerechte Umsetzung",
    text: "Wir führen die Arbeiten sauber und termintreu aus.",
  },
];

export function Process() {
  return (
    <section id="ablauf" className="section-y bg-background">
      <div className="container-page">
        <SectionHeading eyebrow="Ablauf" title="So läuft die Zusammenarbeit ab" />

        <ol className="mt-12 grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.no} className="relative sm:pr-6">
              <span
                className="block text-sm font-bold tracking-[0.14em] text-accent"
                aria-hidden="true"
              >
                {step.no}
              </span>
              <div className="mt-4 flex items-center gap-3" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-primary" />
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
