import { Flame } from "lucide-react";
import { COMPANY } from "./data";

const SERVICE_LINKS = [
  { label: "Heizungstechnik", href: "#leistungen" },
  { label: "Wärmepumpen", href: "#leistungen" },
  { label: "Bad & Sanitär", href: "#leistungen" },
  { label: "Wartung & Service", href: "#leistungen" },
];

export function SiteFooter() {
  return (
    <footer className="gradient-deep text-deep-foreground">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Flame className="size-4.5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="text-[15px] font-extrabold tracking-tight">
              RheinRuhr Haustechnik
            </span>
          </div>
          <address className="mt-5 text-sm not-italic leading-relaxed text-deep-foreground/70">
            {COMPANY.name}
            <br />
            {COMPANY.street}
            <br />
            {COMPANY.zipCity}
          </address>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-deep-foreground/55">
            Kontakt
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-deep-foreground/70">
            <li>
              <a
                href={COMPANY.phoneHref}
                className="transition-colors hover:text-accent"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-accent"
              >
                {COMPANY.email}
              </a>
            </li>
          </ul>

          <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-deep-foreground/55">
            Öffnungszeiten
          </h3>
          <ul className="mt-5 space-y-2 text-sm text-deep-foreground/70">
            {COMPANY.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 sm:max-w-56">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Leistungen">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-deep-foreground/55">
            Leistungen
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-deep-foreground/70">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rechtliches">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-deep-foreground/55">
            Rechtliches
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-deep-foreground/70">
            <li>
              <a href="#impressum" className="transition-colors hover:text-accent">
                Impressum
              </a>
            </li>
            <li>
              <a href="#datenschutz" className="transition-colors hover:text-accent">
                Datenschutz
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-deep-foreground/12">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-deep-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY.name}</p>
          <p>Fiktiver Musterbetrieb – Demonstrationszwecke.</p>
        </div>
      </div>
    </footer>
  );
}
