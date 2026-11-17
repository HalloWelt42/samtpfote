# Samtpfote

Eine schwarze SVG-Katze mit goldenen Augen als wiederverwendbare Begleiterin für Webseiten. Die Zeichnung ist unabhängig von den Referenzbildern aufgebaut und benötigt keine Bilddateien. Der Hintergrund bleibt transparent.

## Lokal starten

```sh
npm install
npm run dev
```

Die angezeigte lokale Adresse im Browser öffnen. Der Spielplatz bietet manuelle Verhaltensauswahl, Größenänderung, vier Eckpositionen und eine Pause. Darstellung und Schriftgröße werden lokal gespeichert.

## Eigenständig einbinden

`public/samtpfote.js` in das eigene öffentliche Verzeichnis kopieren und einbinden:

```html
<script type="module" src="/samtpfote.js"></script>
<samt-pfote
  position="bottom-right"
  sleep-after="35"
  style="--cat-size: 220px; --cat-offset: 16px; --cat-z-index: 50"
></samt-pfote>
```

Die Datei enthält Zeichnung, Gestaltung und Verhaltenssteuerung. Weitere Laufzeitabhängigkeiten oder externe Anfragen sind nicht erforderlich. Ein vollständiges Beispiel liegt unter `public/beispiel.html`. Die Dateien über einen Webserver ausliefern; Module werden beim direkten Öffnen als lokale Datei häufig blockiert.

## Komponente im Projekt

Den Ordner `src/lib` kopieren. Die drei Module `art.js`, `behavior.js` und `widget.js` gehören zur Komponente.

```svelte
<script>
  import Cat from './lib/Cat.svelte';
  let cat;
</script>

<Cat
  bind:this={cat}
  size={220}
  position="bottom-right"
  sleepAfter={35}
  onstate={({ state, label }) => console.log(state, label)}
/>

<button onclick={() => cat.perform('petting')}>Streicheln</button>
```

Die Komponente verwendet die aktuelle Reaktivität mit `$props`. Das Laden des Browsermoduls erfolgt nach dem Einhängen und ist damit auch für serverseitig gerenderte Seiten geeignet.

## Einstellungen

| Einstellung | Bedeutung |
| --- | --- |
| `position` | `bottom-right`, `bottom-left`, `top-right`, `top-left`. Ohne Angabe bleibt die Katze im normalen Dokumentfluss. |
| `sleep-after` | Sekunden bis zum Schlafen, Standard 35, mindestens 5. Schläfrigkeit beginnt nach 62 Prozent der Zeit. |
| `paused` | Vorhandenes Attribut pausiert die Animation. Zum Fortsetzen entfernen. |
| `--cat-size` | Breite einschließlich Bewegungsraum, Standard 220px. In festen Seitenecken auf kleinen Bildschirmen maximal 35vw. |
| `--cat-offset` | Abstand zur Ecke, Standard 16px, zusätzlich zu sicheren Bildschirmrändern. |
| `--cat-z-index` | Ebene der festen Positionierung, Standard 50. |

Die eigentliche Zeichnung nimmt einen Teil des transparenten Bewegungsraums ein. Blickverfolgung verwendet immer die aktuelle Bildschirmposition der Katze. Scrollen, Mausbewegung, Tastatur und Berührung wecken sie sanft. Ein Klick oder die Aktivierung per Tastatur streichelt sie. Auf Geräten ohne Maus bleiben die automatischen Verhaltensweisen verfügbar.

```js
const cat = document.querySelector('samt-pfote');
cat.perform('sleeping');
cat.perform('curious');
cat.perform('stretching');
cat.perform('grooming');
cat.perform('petting');
cat.perform('auto');
cat.addEventListener('catstate', ({ detail }) => {
  console.log(detail.state, detail.label);
});
```

Kurzzeitige manuelle Aktionen enden automatisch. Erzwungener Schlaf endet durch erneute Aktivität. Die erste knappe Sekunde nach dem Schlafbefehl ignoriert Eingaben, damit das Loslassen und kleine Mausbewegungen beim Auslösen die Katze nicht sofort wieder wecken.

## Bewegung und Einbau

Die Animation läuft über eine gemeinsame Bildschleife mit zeitbasierter Dämpfung. Körper, Kopf, Ohren, Pupillen, Pfoten und Schwanz werden als SVG-Gruppen unabhängig geführt. Die Übergänge führen zur jeweils neuen Pose, ohne eine laufende Aktion abrupt zurückzusetzen. Im Hintergrund hält die Schleife an; beim Entfernen werden Ereignisbindungen und Bildschleife aufgeräumt. Mehrere Katzen besitzen voneinander getrennte SVG-Kennungen.

Die Systemeinstellung für reduzierte Bewegung unterdrückt die dekorativen Dauerbewegungen und zufälligen Aktionen. Blickverfolgung und verständliche Zustandsübergänge bleiben verfügbar. Die Katze besitzt einen per Tastatur erreichbaren Streichelknopf. Die nicht belegte Fläche um eine fest positionierte Katze lässt Zeigerereignisse zur Seite durch. Die Katze selbst benötigt eine freie Ecke und sollte keine wichtigen Bedienelemente überlagern.

Die Darstellung ist bewusst stilisiert. Putzen, Strecken und Einrollen sind aus den SVG-Teilen komponierte Animationen. Dies ist eine erste ausgearbeitete Fassung; die Wirkung und das Timing sollten vor dem Einsatz auf Zielgeräten beurteilt werden.

## Prüfen und bauen

```sh
npm run check
npm test
npm run build
```

Der Bau erzeugt `dist/` für den Spielplatz und `dist-widget/samtpfote.js` für den eigenständigen Einbau. Die aktuelle Datei wird auch nach `public/samtpfote.js` kopiert. `public/miso.svg` ist die statische Zeichnung ohne Verhaltenssteuerung.
