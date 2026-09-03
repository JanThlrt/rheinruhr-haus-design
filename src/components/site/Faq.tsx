import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    q: "Was kostet eine Vor-Ort-Beratung?",
    a: "Das Erstgespräch und die Einschätzung vor Ort sind für Sie kostenfrei und unverbindlich. Erst wenn Sie sich für eine Umsetzung entscheiden, entstehen Kosten – transparent im Angebot ausgewiesen.",
  },
  {
    q: "Wie läuft der erste Termin ab?",
    a: "Wir sehen uns die vorhandene Technik und die baulichen Gegebenheiten an, hören uns Ihre Wünsche an und erklären Ihnen verständlich, welche Lösungen in Frage kommen. Der Termin dauert in der Regel etwa 45 bis 60 Minuten.",
  },
  {
    q: "Unterstützen Sie bei Fördermöglichkeiten für Wärmepumpen?",
    a: "Ja. Wir weisen Sie auf aktuell verfügbare Förderprogramme hin und liefern die technischen Angaben und Unterlagen, die Sie für Ihren Antrag benötigen.",
  },
  {
    q: "In welchem Gebiet sind Sie tätig?",
    a: "Wir arbeiten in Düsseldorf und im Umkreis von rund 40 Kilometern – unter anderem in Neuss, Ratingen, Meerbusch, Hilden und Erkrath.",
  },
  {
    q: "Kann ich auch Wartung und Service anfragen?",
    a: "Selbstverständlich. Wir warten Heizungsanlagen und Wärmepumpen – einmalig oder regelmäßig im Rahmen einer Wartungsvereinbarung.",
  },
  {
    q: "Wie erhalte ich ein konkretes Angebot?",
    a: "Nach dem Vor-Ort-Termin erstellen wir Ihnen in der Regel innerhalb weniger Werktage ein schriftliches Angebot mit klar aufgeschlüsselten Positionen.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Häufige Fragen" />

        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline hover:text-accent">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
