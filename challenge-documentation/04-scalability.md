# Skalierbares Landingpage-System

Die Landingpage für RheinRuhr Haustechnik ist zunächst als einzelnes Projekt entstanden. Wenn jedoch Landingpages für beispielsweise 20 verschiedene Handwerksbetriebe erstellt werden sollen, würde ich nicht jede Website vollständig neu entwickeln oder generieren.

Stattdessen würde ich eine gemeinsame technische und gestalterische Basis schaffen und nur die kundenspezifischen Inhalte und benötigten Module austauschen.

## 1. Wiederverwendbare technische Basis

Die grundlegenden Bestandteile einer Handwerker-Landingpage wiederholen sich bei vielen Projekten:

- Header und Navigation
- Hero
- Vertrauenselemente
- Leistungen
- Vorteile
- Ablauf
- Referenzen
- Über-uns-Bereich
- FAQ
- Kontaktformular
- Footer

Diese Bereiche würde ich als wiederverwendbare Komponenten aufbauen.

Dadurch können Verbesserungen an grundlegenden Komponenten auch für zukünftige Projekte übernommen werden, anstatt dieselbe Funktion mehrfach neu zu entwickeln.

## 2. Kundendaten von Komponenten trennen

Firmenspezifische Informationen sollten möglichst nicht direkt in den Komponenten hinterlegt werden.

Stattdessen würde ich zentrale Konfigurationsdaten verwenden, beispielsweise:

```ts
const company = {
  name: "RheinRuhr Haustechnik GmbH",
  city: "Düsseldorf",
  phone: "0211 XXX XXX",
  email: "info@example.de",
  services: [
    "Heizungstechnik",
    "Wärmepumpen",
    "Bad & Sanitär",
    "Wartung & Service"
  ]
};
```

Weitere konfigurierbare Inhalte könnten beispielsweise sein:

- Logo
- Farben
- Schriftarten
- Kontaktdaten
- Öffnungszeiten
- Standorte und Einzugsgebiet
- Headlines
- Call-to-Actions
- Leistungen
- FAQ-Inhalte
- Bilder
- Referenzprojekte

Damit bleibt die technische Struktur gleich, während die Website an den jeweiligen Betrieb angepasst werden kann.

## 3. Design-System statt komplett neuer Designs

Die Seiten sollten trotz gemeinsamer technischer Basis nicht wie identische Kopien wirken.

Dafür würde ich ein kleines Design-System definieren, das unter anderem folgende Elemente standardisiert:

- Typografie
- Abstände
- Button-Varianten
- Karten
- Formulare
- Icons
- Breakpoints
- Border-Radius
- grundlegende Animationen

Kundenspezifisch könnten anschließend beispielsweise Farben, Bilder, Typografie und einzelne Layoutvarianten angepasst werden.

So bleibt die Qualität und Bedienbarkeit konsistent, ohne dass jede Landingpage gleich aussehen muss.

## 4. Branchenmodule

Nicht jeder Handwerksbetrieb benötigt dieselben Inhalte.

Deshalb würde ich zusätzlich optionale Branchenmodule vorsehen.

Beispiele:

### SHK

- Wärmepumpen
- Heizungsmodernisierung
- Badsanierung
- Wartung

### Dachdecker

- Dachsanierung
- Flachdach
- Dachfenster
- Dämmung

### Elektro

- Elektroinstallation
- Wallbox
- Smart Home
- Photovoltaik

Die Landingpage könnte abhängig vom jeweiligen Betrieb aus den passenden Modulen zusammengesetzt werden.

Damit entsteht kein starres Template, sondern ein wiederverwendbares System aus verschiedenen Bausteinen.

## 5. Wiederverwendbare AI-Prompts

Auch den AI-Workflow würde ich standardisieren.

Statt für jeden Kunden wieder bei einem leeren Prompt anzufangen, würde ich Prompt-Templates für wiederkehrende Aufgaben erstellen.

Beispielsweise:

```text
Unternehmen: {{company_name}}
Branche: {{industry}}
Standort: {{location}}
Zielgruppe: {{target_group}}
Hauptleistungen: {{services}}
Primäre Conversion: {{conversion_goal}}
Besonderheiten: {{usp}}

Erstelle auf dieser Grundlage eine Landingpage-Struktur und
conversion-orientierte Texte für den Betrieb.
```

Weitere Prompt-Templates könnten für folgende Aufgaben verwendet werden:

- Zielgruppenanalyse
- Seitenstruktur
- Landingpage-Texte
- FAQ
- CTA-Varianten
- UX-Review
- Mobile-Review
- Qualitätsprüfung

Die Prompts dienen dabei als Ausgangspunkt. Die Ergebnisse werden weiterhin geprüft und an den konkreten Betrieb angepasst.

## 6. Standardisierter Projektablauf

Für mehrere Landingpages würde ich außerdem den gesamten Ablauf standardisieren.

Ein möglicher Prozess wäre:

```text
Kundendaten erfassen
        ↓
Zielgruppe und Conversion-Ziel definieren
        ↓
passende Branchenmodule auswählen
        ↓
AI-gestützte Inhalte erstellen
        ↓
Inhalte prüfen und anpassen
        ↓
Landingpage konfigurieren
        ↓
Desktop- und Mobile-QA
        ↓
Domain / DNS / SSL
        ↓
Deployment
        ↓
Live-Check
```

Dadurch wird der Prozess reproduzierbar und weniger abhängig von einzelnen manuellen Arbeitsschritten.

## 7. QA-Checkliste

Trotz Templates sollte jede Website vor der Veröffentlichung individuell geprüft werden.

Dafür würde ich eine standardisierte QA-Checkliste verwenden.

### Inhalt

- korrekter Firmenname
- korrekte Kontaktdaten
- korrekter Standort
- passende Leistungen
- keine Platzhalter
- keine unbelegten Bewertungen oder Auszeichnungen
- keine offensichtlich generischen AI-Texte

### Funktion

- Navigation
- CTAs
- Kontaktformular
- Validierung
- Telefonnummer
- E-Mail-Links
- FAQ und weitere Interaktionen

### Darstellung

- Desktop
- Tablet
- Smartphone
- Typografie
- Abstände
- Bilder
- Touch-Targets

### Technik

- Domain
- DNS
- HTTPS
- Performance
- fehlerhafte Links
- grundlegende Accessibility

## 8. Zentrale Verbesserungen

Ein weiterer Vorteil einer gemeinsamen Basis ist, dass Verbesserungen nicht für jedes zukünftige Projekt neu entwickelt werden müssen.

Wird beispielsweise die mobile Navigation, das Kontaktformular oder die Accessibility einer Komponente verbessert, kann diese Verbesserung in die gemeinsame Basis übernommen und bei zukünftigen Landingpages direkt verwendet werden.

Dadurch steigt die Qualität des Systems mit jedem weiteren Projekt.

---

## Zielbild

Für 20 Handwerksbetriebe würde ich daher nicht 20 vollständig unabhängige Landingpages von Grund auf erstellen.

Das Ziel wäre:

**Gemeinsame technische Basis + wiederverwendbare Komponenten + Design-System + kundenspezifische Daten + Branchenmodule + Prompt-Templates + standardisiertes Deployment + QA-Checkliste**

AI beschleunigt dabei insbesondere Konzeption, Content-Erstellung und Iteration. Die wiederverwendbare technische Struktur und die Qualitätskontrolle sorgen dafür, dass daraus ein skalierbarer und reproduzierbarer Prozess entsteht.
