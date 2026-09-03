import teamImage from "@/assets/team.jpg";

export function About() {
  return (
    <section id="ueber-uns" className="section-y bg-background">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Über uns
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Ein Meisterbetrieb aus der Region
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            RheinRuhr Haustechnik ist ein inhabergeführter Fachbetrieb für
            Sanitär-, Heizungs- und Klimatechnik in Düsseldorf. Wir stehen für
            fachkundige Beratung, saubere Arbeit, verlässliche Kommunikation und
            Lösungen, die langfristig zu unseren Kunden passen.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-lift)]">
          <img
            src={teamImage}
            alt="Team von RheinRuhr Haustechnik vor dem Firmenfahrzeug"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
