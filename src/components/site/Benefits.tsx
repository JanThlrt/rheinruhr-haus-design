import { HandHeart, UserRound, ReceiptText, Building2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const BENEFITS = [
  {
    icon: HandHeart,
    title: "Ehrliche Beratung",
    text: "Wir empfehlen Lösungen, die zu Ihrem Haus und Ihren Anforderungen passen.",
  },
  {
    icon: UserRound,
    title: "Ein Ansprechpartner",
    text: "Von der Beratung bis zur Abnahme begleitet Sie ein fester Ansprechpartner.",
  },
  {
    icon: ReceiptText,
    title: "Transparente Kalkulation",
    text: "Sie erhalten ein klar und nachvollziehbar aufgeschlüsseltes Angebot.",
  },
  {
    icon: Building2,
    title: "Erfahrung aus der Region",
    text: "Wir kennen die Anforderungen von Gebäuden in Düsseldorf und Umgebung.",
  },
];

export function Benefits() {
  return (
    <section id="vorteile" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Warum RheinRuhr Haustechnik"
          title="Handwerk ist Vertrauenssache"
        />

        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4.5">
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
