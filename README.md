# samtpfote von hallowelt42

Ein kostenloses Geschenk: eine kleine, interaktive SVG-Katze für private und gewerbliche Webseiten. **Die sichtbare Nennung "hallowelt42 / samtpfote" und die Herkunftshinweise im Quellcode sind verpflichtend.** Die vollständigen Bedingungen stehen in [LIZENZ.txt](./LIZENZ.txt).

[Demo öffnen](https://hallowelt42.github.io/samtpfote/) | [Einbauanleitung](https://hallowelt42.github.io/samtpfote/ANLEITUNG.html) | [Komplettes Paket](https://hallowelt42.github.io/samtpfote/samtpfote-paket.zip)

## Die kleine Begleiterin

Blickverfolgung mit Augen und Kopf, Blinzeln, Atmung, Ohrzucken, Schwanzbewegungen, Putzen, Strecken, Knuddeln mit einzelnen Herzen und optionalem echtem Schnurren. Bleibt der Zeiger vor ihrer Nase, richtet sie sich auf und zeigt beim Tatzen die Pfotenballen. Bei Ruhe schläft sie ein. Aufsteigende, verschwimmende Schlafzeichen und eine gelegentliche Traumwolke mit Computermaus begleiten den Schlaf. Neue Aktivität weckt sie sanft.

Die Hauptvariante ist warm und fast schwarz. Creme und Warmgrau stehen für den direkten Vergleich bereit. Der Hintergrund ist transparent. **Wohnzimmer, Sofa, Lampe und Pflanze gehören ausschließlich zur Demo.**

Der Name steht zentral als `CAT_NAME` in [src/lib/config.js](./src/lib/config.js). Die Demo und die erzeugte Anleitung verwenden denselben Wert. Die Herkunftsnennung bleibt unabhängig vom Katzennamen erhalten.

## Eigenständig einbauen

Das Komplettpaket entpacken und den enthaltenen Ordner `samtpfote` im öffentlichen Verzeichnis der eigenen Webseite ablegen. Danach:

```html
<script type="module" src="/samtpfote/samtpfote.js"></script>
<samt-pfote
  position="bottom-right"
  coat="black"
  sleep-after="35"
  style="--cat-size:170px; --cat-offset:16px"
></samt-pfote>
```

Keine zusätzlichen Bibliotheken erforderlich. Alle Dateien liegen auf der eigenen Webseite. Ohne `position` bleibt die Katze im normalen Dokumentfluss. In kleinen Seitenecken begrenzt die Komponente ihre Breite auf 35vw.

Für Schnurren `sound-src="/samtpfote/audio/schnurren.mp3"` und optional `volume="35"` ergänzen. Ton startet ausschließlich beim bewussten Streicheln. Die echte Aufnahme stammt von Adam Cuerden und ist gemeinfrei. Herkunft und Bearbeitung stehen in [HERKUNFT.txt](./HERKUNFT.txt).

## Komponente im Projekt

Den vollständigen Ordner `src/lib` übernehmen. Das Wohnzimmer `Room.svelte` wird für den Einbau nicht benötigt.

```svelte
<script>
  import Cat from './lib/Cat.svelte';
  let cat;
</script>

<Cat
  bind:this={cat}
  size={170}
  position="bottom-right"
  coat="black"
  sleepAfter={35}
/>
<button onclick={() => cat.perform('petting')}>Knuddeln</button>
```

Die Komponente verwendet `$props` und lädt das Browsermodul erst nach dem Einhängen. `name` überschreibt bei Bedarf den zentralen Namen. `soundSrc` aktiviert die optionale Aufnahme, `volume` setzt die Lautstärke. `onstate` empfängt `{ state, label }`.

## Lokal entwickeln

```sh
npm install
npm run dev
npm run check
npm test
npm run build
```

Die Demo füllt das Fenster ohne Seitenscrollen. Nur Bedienbereiche und Anleitung scrollen bei Platzbedarf innerhalb ihrer Bereiche. Helle und dunkle Darstellung sowie gespeicherte Schriftvergrößerung sind über die Kopfleiste erreichbar. Auf kleinen Bildschirmen öffnet das Zahnrad die Katzeneinstellungen.

Die Schriften werden aus den installierten Paketen lokal gebündelt. Die Demo lädt keine externen Schriften, Skripte, Symbole oder Audiodateien nach.

Der Bau erzeugt `dist/` für die Demo, `dist-widget/samtpfote.js` für die Einzelkomponente und `public/samtpfote-paket.zip` mit Anleitung, Komponente, Quellcode und optionalem Schnurren. Bei Änderungen des zentralen Namens die Dateien neu bauen.

Die Bewegung basiert auf einer gemeinsamen, zeitabhängigen Bildschleife. Körperteile sind getrennte SVG-Gruppen. Im Hintergrund hält die Schleife an; Entfernen räumt Ereignisbindungen und Audio auf. Reduzierte Bewegung unterdrückt dekorative Dauerbewegungen und zufällige Aktionen.

## Gesicherter erster Entwurf

Der unveränderte erste Entwurf ist im Versionsstand `v0.1-erster-entwurf` gesichert. Zusätzlich enthält `referenz/` die damalige Katzenzeichnung, Bewegungssteuerung und Oberfläche. Diese Dateien dienen als Vergleich und werden nicht in die aktuelle Demo eingebunden.

## Entwicklereinstellungen

Spezielle Verhaltensdetails wie Ausweichzeit, Strecke, Rückkehr, Blickverfolgung, Blinzeln, Aktionsdauern und Träume werden über `configure()` oder die Eigenschaft `behavior` eingestellt. Diese Optionen erscheinen nicht als zusätzliche Bedienelemente in der Demo. Die vollständige Beschreibung steht in [ENTWICKLER.md](./ENTWICKLER.md).
