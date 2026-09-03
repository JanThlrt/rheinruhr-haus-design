# Hosting- und Deployment-Konzept

Die Demo-Version der Landingpage wird aktuell direkt über Lovable bereitgestellt. Für einen realen Kunden würde ich die Website unter dessen eigener Domain veröffentlichen.

Wenn die Domain beispielsweise bei IONOS oder Hetzner verwaltet wird, würde ich folgendermaßen vorgehen:

## 1. Bestehende Domain prüfen

Zunächst würde ich prüfen, wo die Domain und gegebenenfalls das bestehende Hosting verwaltet werden. Vorhandene DNS-Einträge, insbesondere für E-Mail-Dienste, sollten dabei berücksichtigt und nicht unnötig verändert werden.

## 2. Website deployen

Der über Git versionierte Quellcode wird für die Produktion gebaut und auf einer geeigneten Hosting-Umgebung bereitgestellt.

Vereinfacht:

**Git Repository → Build → Hosting/Webserver**

## 3. Domain über DNS verbinden

Anschließend wird die Domain über die DNS-Verwaltung von IONOS bzw. Hetzner mit dem Hosting verbunden.

Abhängig von der Hosting-Lösung würde ich dafür beispielsweise einen:

- `A`-Record für eine IPv4-Adresse,
- `AAAA`-Record für IPv6 oder
- `CNAME`-Record für einen vom Hosting-Anbieter vorgegebenen Hostnamen

verwenden.

## 4. HTTPS einrichten

Für die Domain würde anschließend ein SSL/TLS-Zertifikat eingerichtet bzw. die automatische Zertifikatsverwaltung des Hostings verwendet.

Danach würde ich prüfen, ob die Website korrekt über HTTPS erreichbar ist und HTTP-Anfragen auf HTTPS weitergeleitet werden.

## 5. Livegang und QA

Vor und direkt nach dem Livegang würde ich die wichtigsten Punkte erneut testen:

- Desktop- und Mobile-Darstellung
- Navigation und CTAs
- Kontaktformular und Validierung
- Telefonnummer und E-Mail-Links
- HTTPS und Domain
- fehlerhafte Links
- grundlegende Performance
- Impressum und Datenschutz

Der vollständige Ablauf wäre damit:

**Domain prüfen → Build & Deployment → DNS konfigurieren → SSL/TLS → QA → Livegang → abschließender Produktionscheck**
