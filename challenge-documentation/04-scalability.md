# Skalierbares Template-System

Für beispielsweise 20 Handwerksbetriebe würde ich nicht jede Landingpage vollständig neu erstellen oder mit AI neu generieren. Stattdessen würde ich eine gemeinsame technische Basis mit wiederverwendbaren Komponenten verwenden.

## Wiederverwendbare Komponenten

Typische Bereiche wie

- Header und Navigation
- Hero
- Leistungen
- Vorteile
- Ablauf
- Referenzen
- FAQ
- Kontaktformular
- Footer

würden als wiederverwendbare Komponenten aufgebaut.

Kundenspezifische Informationen wie Firmenname, Standort, Kontaktdaten, Farben, Leistungen, Texte und Bilder würde ich davon trennen und zentral konfigurieren.

Ein vereinfachtes Beispiel:

```ts
const company = {
  name: "RheinRuhr Haustechnik GmbH",
  city: "Düsseldorf",
  phone: "0211 XXX XXX",
  services: ["Heizung", "Wärmepumpen", "Bad & Sanitär"]
};
```

## Design-System und Branchenmodule

Ein kleines Design-System würde Typografie, Abstände, Buttons, Formulare, Breakpoints und weitere grundlegende UI-Elemente standardisieren.

Zusätzlich könnten optionale Branchenmodule verwendet werden, beispielsweise:

- **SHK:** Wärmepumpe, Heizung, Badsanierung
- **Elektro:** Wallbox, Smart Home, Photovoltaik
- **Dachdecker:** Dachsanierung, Dämmung, Dachfenster

So bleibt die technische Basis gleich, während Inhalt und Erscheinungsbild an den jeweiligen Betrieb angepasst werden können.

## AI- und Projekt-Workflow

Auch für Claude und Lovable würde ich wiederverwendbare Prompt-Templates mit Variablen wie Branche, Standort, Zielgruppe, Leistungen und Conversion-Ziel erstellen.

Der standardisierte Prozess wäre:

**Kundendaten → passende Module → AI-gestützte Inhalte → individuelle Prüfung → Landingpage → QA → Deployment**

Vor jeder Veröffentlichung würde zusätzlich dieselbe QA-Checkliste für Mobile/Desktop, Inhalte, Formulare, CTAs, Links, Kontaktdaten, HTTPS und grundlegende Performance durchgeführt.

## Ziel

Das Ziel wäre damit:

**Gemeinsame technische Basis + wiederverwendbare Komponenten + variable Kundendaten + Branchenmodule + Prompt-Templates + standardisierte QA und Deployment**

Dadurch können weitere Landingpages schneller erstellt werden, ohne bei jedem Kunden bei null anzufangen oder die individuelle Anpassung vollständig aufzugeben.

AI beschleunigt dabei insbesondere Konzeption, Content-Erstellung und Iteration. Die wiederverwendbare technische Struktur und die Qualitätskontrolle sorgen dafür, dass daraus ein skalierbarer und reproduzierbarer Prozess entsteht.
