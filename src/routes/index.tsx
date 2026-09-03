import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { Benefits } from "@/components/site/Benefits";
import { HeatPump } from "@/components/site/HeatPump";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "RheinRuhr Haustechnik | SHK-Meisterbetrieb Düsseldorf";
const DESCRIPTION =
  "Heizung, Wärmepumpe und Badsanierung aus einer Hand: Ihr SHK-Meisterbetrieb für Düsseldorf und Umgebung. Kostenlose Erstberatung anfragen.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Benefits />
        <HeatPump />
        <Process />
        <Projects />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
