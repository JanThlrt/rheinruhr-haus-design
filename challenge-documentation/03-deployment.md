# Hosting- und Deployment-Konzept

Die Demo-Version der Landingpage wird aktuell direkt über Lovable bereitgestellt.

Für einen realen Kunden würde ich die Website unter der eigenen Domain des Unternehmens produktiv veröffentlichen. Wenn die Domain beispielsweise bei IONOS oder Hetzner liegt, würde ich grundsätzlich nach folgendem Prozess vorgehen.

## 1. Domain und bestehende Infrastruktur prüfen

Zunächst würde ich klären:

- Wo wird die Domain aktuell verwaltet?
- Gibt es bereits eine bestehende Website oder Hosting-Umgebung?
- Welche DNS-Einträge sind bereits vorhanden?
- Werden über die Domain weitere Dienste wie E-Mail verwendet?
- Soll die Website unter der Hauptdomain oder beispielsweise unter `www` erreichbar sein?

Vorhandene DNS-Einträge würde ich nicht unnötig verändern, da beispielsweise MX-Einträge für den E-Mail-Verkehr weiterhin benötigt werden können.

## 2. Produktions-Build und Hosting

Der Quellcode der Landingpage wird über Git versioniert und liegt in einem Repository.

Für die produktive Veröffentlichung würde zunächst ein optimierter Build der Anwendung erstellt und anschließend auf einer geeigneten Hosting-Umgebung bereitgestellt.

Der grundsätzliche Ablauf wäre:

```text
Git Repository
      ↓
Build
      ↓
Hosting / Webserver
      ↓
Domain
```

Je nach vorhandener Infrastruktur des Kunden könnte dafür das Webhosting des Providers oder eine andere geeignete Hosting-Lösung verwendet werden.

Wichtig ist für mich, Quellcode und Deployment voneinander zu trennen: Git dient der Versionierung, während die gebaute Anwendung über die Hosting-Umgebung ausgeliefert wird.

## 3. DNS konfigurieren

Nach dem Deployment wird die Domain mit dem Hosting-Ziel verbunden.

Dafür werden in der DNS-Verwaltung bei IONOS bzw. Hetzner die benötigten DNS-Einträge gesetzt.

Je nach Hosting-Lösung können dies beispielsweise sein:

- `A`-Record für die Zuordnung zu einer IPv4-Adresse
- `AAAA`-Record bei Verwendung von IPv6
- `CNAME`-Record, wenn die Domain bzw. Subdomain auf einen vom Hosting-Anbieter vorgegebenen Hostnamen zeigen soll

Beispielsweise könnte `www.example.de` per CNAME mit dem Hosting-Ziel verbunden werden.

Nach der Änderung würde ich prüfen, ob die Domain korrekt aufgelöst wird. Dabei ist zu berücksichtigen, dass DNS-Änderungen aufgrund von Caching nicht überall unmittelbar sichtbar sein müssen.

## 4. SSL/TLS und HTTPS

Die produktive Website sollte ausschließlich über HTTPS erreichbar sein.

Nach der Domain-Verknüpfung würde ich daher ein SSL/TLS-Zertifikat für die verwendete Domain einrichten. Wenn die Hosting-Lösung eine automatische Zertifikatsverwaltung anbietet, würde ich diese bevorzugen.

Anschließend würde ich prüfen:

- Ist die Seite über `https://` erreichbar?
- Ist das Zertifikat gültig?
- Werden HTTP-Aufrufe auf HTTPS weitergeleitet?
- Werden alle Ressourcen ebenfalls über HTTPS geladen?

## 5. Vorbereitung des Livegangs

Vor der Veröffentlichung würde ich einen abschließenden Qualitätscheck durchführen.

### Funktion

- Navigation und Anchor-Links
- CTA-Buttons
- Telefonnummern und E-Mail-Links
- Kontaktformular
- Formularvalidierung
- Erfolgsmeldungen
- FAQ und weitere Interaktionen

### Responsive Design

- Desktop
- Tablet
- verschiedene Smartphone-Größen

### Inhalt

- Firmenname
- Telefonnummer
- E-Mail-Adresse
- Adresse
- Öffnungszeiten
- Leistungen
- Texte und Bilder
- Impressum und Datenschutz

### Technik

- HTTPS
- DNS-Auflösung
- grundlegende Performance
- keine fehlerhaften Links
- keine offensichtlichen Fehler in der Browser-Konsole
- grundlegende Accessibility

## 6. Livegang

Nach erfolgreichem Test wird die Domain auf die produktive Website geschaltet.

Direkt nach dem Livegang würde ich die wichtigsten Funktionen erneut über die tatsächliche Domain testen, insbesondere:

1. Aufruf über Desktop und Smartphone
2. HTTPS
3. Navigation
4. Kontaktformular
5. CTA-Verlinkungen
6. Telefonnummer und E-Mail
7. Impressum und Datenschutz

Dadurch wird sichergestellt, dass nicht nur die Anwendung selbst funktioniert, sondern auch Domain, DNS, SSL und Hosting korrekt zusammenspielen.

## 7. Weitere Updates

Auch nach dem Livegang bleibt das Git-Repository die zentrale Grundlage für Änderungen.

Ein möglicher standardisierter Prozess für spätere Anpassungen wäre:

```text
Änderung
   ↓
Git Commit
   ↓
Review / Test
   ↓
Build
   ↓
Deployment
   ↓
kurzer Live-Check
```

Bei mehreren Kundenprojekten würde ich diesen Ablauf möglichst automatisieren, sodass Änderungen nach erfolgreicher Prüfung reproduzierbar und mit möglichst wenig manuellen Schritten veröffentlicht werden können.

---

## Zusammenfassung

Der produktive Ablauf lässt sich vereinfacht darstellen als:

**Domain prüfen → Anwendung bauen und deployen → DNS konfigurieren → SSL/TLS einrichten → Qualitätssicherung → Livegang → abschließender Produktionscheck**

Die aktuelle Lovable-Veröffentlichung dient als Demo. Für einen realen Kunden würde die Website mit dessen eigener Domain und einem standardisierten Deployment-Prozess produktiv betrieben werden.
