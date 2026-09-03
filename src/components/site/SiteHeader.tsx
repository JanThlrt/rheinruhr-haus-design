import { useEffect, useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV_LINKS } from "./data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-md"
          aria-label={`${COMPANY.name} – zum Seitenanfang`}
        >
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <Flame className="size-4.5" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-foreground">
              RheinRuhr
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Haustechnik
            </span>
          </span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            {COMPANY.phone}
          </a>
          <Button asChild variant="cta" size="lg">
            <a href="#kontakt">Kostenlose Beratung</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="flex size-11 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? (
            <X className="size-5" strokeWidth={1.75} />
          ) : (
            <Menu className="size-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

    </header>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-18 z-40 overflow-y-auto overscroll-contain border-t border-border bg-background lg:hidden"
        >
          <nav
            aria-label="Mobile Navigation"
            className="container-page flex min-h-full flex-col py-5"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <Button asChild variant="cta" size="xl">
                <a href="#kontakt" onClick={() => setOpen(false)}>
                  Kostenlose Beratung
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href={COMPANY.phoneHref}>{COMPANY.phone} anrufen</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
