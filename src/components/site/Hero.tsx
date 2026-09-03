import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
import { COMPANY } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface pt-18">
      <div className="container-page grid items-center gap-9 py-10 sm:gap-12 sm:py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            SHK-Meisterbetrieb · Düsseldorf
          </p>

          <h1 className="mt-5 text-[1.75rem] font-extrabold leading-[1.12] text-foreground sm:mt-6 sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]">
            Heizung, Bad und Wärmepumpe – fachgerecht geplant und umgesetzt
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Ihr Meisterbetrieb für moderne Haustechnik in Düsseldorf und
            Umgebung. Von der ersten Beratung bis zur Umsetzung aus einer Hand.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button asChild variant="cta" size="xl">
              <a href="#kontakt">Kostenlose Beratung anfragen</a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={COMPANY.phoneHref}>
                <Phone className="size-4.5" strokeWidth={1.75} />
                {COMPANY.phone} anrufen
              </a>
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Unverbindlich · Persönliche Beratung · Regional für Sie da
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-lift)]">
            <img
              src={heroImage}
              alt="Handwerker prüft eine Wärmepumpe an einem modernen Wohnhaus"
              width={1600}
              height={1104}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
