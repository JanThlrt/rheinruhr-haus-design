import { useState, type FormEvent } from "react";
import { Phone, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "./data";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "contact" | "topic", string>>;

const TOPICS = [
  "Heizung",
  "Wärmepumpe",
  "Bad & Sanitär",
  "Wartung",
  "Sonstiges",
];

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    contact: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2)
      next.name = "Bitte geben Sie Ihren Namen an.";

    const contact = values.contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(contact);
    const isPhone = /^[+0][\d\s/()-]{6,}$/.test(contact);
    if (!contact) {
      next.contact = "Bitte geben Sie eine Telefonnummer oder E-Mail an.";
    } else if (!isEmail && !isPhone) {
      next.contact = "Bitte prüfen Sie Ihre Telefonnummer oder E-Mail-Adresse.";
    }

    if (!values.topic) next.topic = "Bitte wählen Sie Ihr Anliegen aus.";
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setValues({ name: "", contact: "", topic: "", message: "" });
      toast.success("Vielen Dank für Ihre Anfrage!", {
        description: "Wir melden uns zeitnah persönlich bei Ihnen zurück.",
      });
    }, 600);
  };

  return (
    <section id="kontakt" className="section-y bg-background">
      <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Kontakt
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Lassen Sie uns über Ihr Projekt sprechen
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ob Wärmepumpe, Heizungsmodernisierung oder Badsanierung – schildern
            Sie uns kurz Ihr Anliegen.
          </p>

          <div className="mt-9 rounded-xl border border-border bg-surface p-6">
            <p className="text-sm font-semibold text-foreground">
              Lieber direkt telefonisch?
            </p>
            <a
              href={COMPANY.phoneHref}
              className="mt-3 inline-flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-foreground transition-colors hover:text-accent"
            >
              <Phone className="size-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
              {COMPANY.phone}
            </a>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-accent" strokeWidth={1.6} aria-hidden="true" />
                Mo – Do 07:30 – 17:00 Uhr · Fr 07:30 – 14:00 Uhr
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-accent" strokeWidth={1.6} aria-hidden="true" />
                {COMPANY.street}, {COMPANY.zipCity}
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={cn("mt-2 h-12", errors.name && "border-destructive")}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="contact">Telefonnummer oder E-Mail *</Label>
              <Input
                id="contact"
                name="contact"
                inputMode="text"
                autoComplete="tel"
                value={values.contact}
                onChange={(e) => set("contact", e.target.value)}
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? "contact-error" : undefined}
                className={cn("mt-2 h-12", errors.contact && "border-destructive")}
              />
              {errors.contact && (
                <p id="contact-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.contact}
                </p>
              )}
            </div>

            <fieldset>
              <legend className="text-sm font-medium leading-none text-foreground">
                Ihr Anliegen *
              </legend>
              <div
                className="mt-3 flex flex-wrap gap-2"
                role="radiogroup"
                aria-invalid={Boolean(errors.topic)}
                aria-describedby={errors.topic ? "topic-error" : undefined}
              >
                {TOPICS.map((topic) => {
                  const active = values.topic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => set("topic", topic)}
                      className={cn(
                        "min-h-11 cursor-pointer rounded-md border px-4 text-sm font-medium transition-colors",
                        active
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-foreground/25 hover:text-foreground",
                      )}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
              {errors.topic && (
                <p id="topic-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.topic}
                </p>
              )}
            </fieldset>

            <div>
              <Label htmlFor="message">Nachricht (optional)</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                className="mt-2 resize-none"
                placeholder="Kurze Beschreibung Ihres Vorhabens"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="cta"
            size="xl"
            disabled={submitting}
            className="mt-7 w-full"
          >
            {submitting ? "Wird gesendet …" : "Kostenlose Beratung anfragen"}
          </Button>

          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            Unverbindlich · Persönliche Rückmeldung · Keine Kosten für die
            Erstberatung
          </p>
        </form>
      </div>
    </section>
  );
}
