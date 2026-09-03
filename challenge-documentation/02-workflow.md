# Workflow

Für die Umsetzung der Challenge habe ich einen iterativen AI-gestützten Workflow verwendet. Ziel war es, nicht direkt mit der Generierung einer Website zu beginnen, sondern zunächst Zielgruppe, Inhalte und Conversion-Ziel festzulegen und die generierte Seite anschließend manuell zu prüfen und zu optimieren.

## 1. Anforderungen und Ziel definieren

Ausgangspunkt war die Aufgabenstellung der Challenge. Als fiktiven Betrieb habe ich einen SHK-Meisterbetrieb aus Düsseldorf gewählt.

Dabei wurden zunächst die wichtigsten Rahmenbedingungen festgelegt:

- Zielgruppe: Eigenheimbesitzer in Düsseldorf und Umgebung
- Leistungen: Heizung, Wärmepumpen, Bad & Sanitär sowie Wartung
- primäres Ziel: unverbindliche Kontaktanfrage
- seriöser und regionaler Markenauftritt
- responsive Umsetzung für Desktop und Smartphone
- keine erfundenen Bewertungen, Zertifikate oder überprüfbar wirkenden Auszeichnungen

## 2. Strategie und Inhalte mit Claude

Claude habe ich zunächst als konzeptionellen Sparringspartner eingesetzt.

Im ersten Schritt ging es bewusst noch nicht um Code, sondern um:

- Zielgruppe und Nutzerbedürfnisse
- Seitenstruktur
- Nutzenargumentation
- Vertrauenselemente
- Call-to-Actions
- Conversion-Optimierung

Anschließend wurden die Inhalte konkretisiert. Dabei lag der Fokus auf natürlichen und seriösen Texten, die zu einem deutschen Handwerksbetrieb passen und nicht wie typische generische AI-Werbetexte wirken.

Die wichtigsten verwendeten Prompts sind in [01-prompts.md](01-prompts.md) dokumentiert.

## 3. Umsetzung mit Lovable

Auf Basis der Vorarbeit wurde ein detailliertes Briefing für Lovable erstellt.

Das Briefing enthielt neben den Inhalten auch konkrete Anforderungen an:

- visuelle Hierarchie
- Farben und Typografie
- responsive Darstellung
- Navigation und Smooth Scrolling
- CTA-Hierarchie
- Formulare und Validierung
- FAQ-Accordion
- Hover- und Focus-States
- Accessibility
- Performance
- dezente Animationen

Lovable setzte daraus die erste funktionsfähige Version der Landingpage um.

## 4. Manuelle Prüfung

Die erste Version wurde anschließend sowohl in der Desktop- als auch in der Smartphone-Ansicht geprüft.

Dabei habe ich unter anderem kontrolliert:

- Darstellung und Abstände der einzelnen Sektionen
- Lesbarkeit und visuelle Hierarchie
- mobile Darstellung des Hero-Bereichs
- Hamburger-Menü
- Anchor-Navigation und Smooth Scrolling
- CTA-Buttons
- Telefonnummer als `tel:`-Link
- FAQ-Accordion
- Kontaktformular
- Formularvalidierung
- Erfolgsmeldung nach dem Absenden

Dabei zeigte sich beispielsweise, dass der mobile Hero noch kompakter gestaltet werden konnte und beim geöffneten Hamburger-Menü der darunterliegende Seiteninhalt weiterhin sichtbar war. Dadurch erschienen die CTAs im oberen Bereich optisch doppelt.

## 5. Gezielter UX- und Mobile-Polish

Statt die Website neu generieren zu lassen, wurden die identifizierten Punkte anschließend über einen gezielten zweiten Lovable-Prompt korrigiert.

Dabei wurden unter anderem:

- der mobile Hero kompakter gestaltet
- die mobile Navigation als eigenständiges Panel optimiert
- die bestehende CTA-Hierarchie beibehalten
- eine eindeutig fiktive Demo-Adresse verwendet
- bestehende Funktionen bewusst erhalten

Wichtig war dabei, das bereits funktionierende Design nicht grundlegend verändern zu lassen.

## 6. Abschließender Funktionscheck

Nach den Anpassungen wurde die Landingpage erneut getestet.

Besonderes Augenmerk lag auf:

- Navigation zwischen den Sektionen
- CTA-Verlinkungen zum Kontaktformular
- mobiler Navigation
- Formularvalidierung
- Erfolgsmeldung
- FAQ-Accordion
- Darstellung auf unterschiedlichen Bildschirmgrößen

Damit wurde die AI-generierte Umsetzung nicht ungeprüft übernommen, sondern iterativ getestet und angepasst.

## 7. Veröffentlichung und GitHub

Nach dem abschließenden Check wurde die Landingpage über Lovable veröffentlicht und damit über einen öffentlichen Link zugänglich gemacht.

Anschließend wurde das Lovable-Projekt mit GitHub verbunden. Dadurch liegt der Quellcode zusätzlich in einem öffentlichen Repository vor und Lovable und GitHub können synchron gehalten werden.

Der Ablauf lässt sich damit zusammenfassen als:

**Anforderungen → Strategie mit Claude → Inhalte & Conversion → Umsetzung mit Lovable → manuelle Desktop-/Mobile-Prüfung → gezielter UX-Polish → Funktionscheck → Veröffentlichung → GitHub-Synchronisierung**
