# samtpfote von hallowelt42 - Entwicklereinstellungen

Die Startgröße ist 170px. Alle speziellen Verhaltenseinstellungen werden im Code vorgenommen. Die Demo zeigt dafür keine zusätzlichen Bedienelemente. Die Standards stehen zentral in `komponente/options.js` beziehungsweise im Quellprojekt unter `src/lib/options.js`.

Die Namensnennung "hallowelt42 / samtpfote" bleibt gemäß LIZENZ.txt verpflichtend.

## Eigenständige Komponente konfigurieren

```js
await customElements.whenDefined('samt-pfote');
const cat = document.querySelector('samt-pfote');
cat.configure({
  avoidance: {
    enabled: true,
    delay: 3,
    distance: 100,
    returnDelay: 8,
    speed: 2.5
  },
  reactions: { swatEnabled: true, swatDelay: 1.3 },
  idle: { sleepAfter: 35, wakeDuration: 2.2 },
  gaze: { enabled: true, smoothing: 6 },
  blink: { minInterval: 3.5, maxInterval: 8.5, duration: 0.26 },
  dreams: { enabled: true, delay: 8, interval: 24, duration: 7 }
});
```

`configure()` übernimmt nur die angegebenen Felder. Alle anderen aktuellen Werte bleiben erhalten. Änderungen gelten für diese Instanz und greifen während des Betriebs. Die Eigenschaft `cat.behavior` liefert eine unabhängige Kopie der aufgelösten Einstellungen. Alternativ kann ein Objekt über `cat.behavior = { ... }` zugewiesen werden.

## Komponente im Projekt

```svelte
<script>
  import Cat from './komponente/Cat.svelte';
</script>

<Cat
  size={170}
  position="bottom-right"
  behavior={{ avoidance: { delay: 3, returnDelay: 8 } }}
/>
```

Ein vorhandenes Attribut `sleep-after` beziehungsweise die Eigenschaft `sleepAfter` hat Vorrang vor `behavior.idle.sleepAfter`. Für `volume` gilt derselbe Vorrang gegenüber `behavior.audio.volume`.

## Verfügbare Gruppen

| Gruppe | Einstellungen |
| --- | --- |
| `avoidance` | `enabled`, `delay`, `distance`, `sizeFactor`, `minDistance`, `maxDistance`, `returnDelay`, `speed`, `margin` |
| `gaze` | `enabled`, `smoothing`, `horizontalRange`, `verticalRange`, `headRange` |
| `blink` | `minInterval`, `maxInterval`, `duration` |
| `idle` | `sleepAfter`, `drowsyRatio`, `wakeDuration` |
| `reactions` | `swatEnabled`, `swatDelay`, `swatCooldown` |
| `spontaneous` | `enabled`, `minInterval`, `maxInterval` |
| `actions` | Dauer von `petting`, `stretching`, `grooming` und `swatting` |
| `motion` | `enabled`, `bodyAmplitude`, `breathingAmplitude`, `earAmplitude`, `tailAmplitude`, `heartScale`, `stepHeight` |
| `dreams` | `enabled`, `delay`, `interval`, `duration` |
| `audio` | `volume` |

Zeitangaben sind Sekunden. `avoidance.distance` ist eine feste Pixelstrecke. Bei 0 wird die Strecke aus Katzengröße, `sizeFactor`, `minDistance` und `maxDistance` bestimmt. Der verfügbare Platz am Bildschirm begrenzt die Strecke zusätzlich. Ausweichen erfolgt ausschließlich bei fester Eckposition. Auf dem Sofa beziehungsweise im Dokumentfluss bleibt die Katze an ihrem Platz.

`avoidance.delay` beträgt standardmäßig 3 Sekunden. Während des Verweilens vor der ursprünglichen Ecke läuft die Wartezeit weiter, auch wenn eine Tatzenaktion beginnt. Danach wird die Aktion weich beendet und Platz gemacht. Die Rückkehr erfolgt erst bei freiem Bereich und nach `returnDelay`; laufende Putz- oder Streckaktionen werden dafür nicht unterbrochen.

`smoothing` und `speed` steuern die Dämpfung: größere Werte reagieren schneller. `drowsyRatio` ist der Anteil der Ruhezeit bis zur Schläfrigkeit. `motion.enabled` steuert dekorative Dauerbewegungen und automatische Reaktionen; zum vollständigen Pausieren das Attribut `paused` verwenden. Reduzierte Bewegung des Systems wird weiterhin respektiert.

Die Aktionsdauern skalieren die vollständige Bewegungssequenz, statt sie bloß vorzeitig abzubrechen. Zusätzliche Form- und Bewegungsdetails liegen im mitgelieferten Quellcode `art.js`, `motion.js` und `coats.js` und können unter Beibehaltung der Herkunftshinweise angepasst werden.

## Freie Position und Ankerelement

Eine freie Position verwendet `position="free"` und `x`, `y`. Numerische Werte sind Pixel, zusätzlich sind gültige Stilangaben wie `50vw` oder `calc(50vw - 85px)` möglich.

```html
<samt-pfote position="free" x="120" y="80"></samt-pfote>
<samt-pfote anchor="#meine-karte" anchor-align="top-right" offset-x="-12" offset-y="0"></samt-pfote>
```

`anchor-align` unterstützt `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right` und `center`. Die ausgewählte vertikale Kante ist die Standlinie der Pfoten. `offset-x` und `offset-y` verschieben die Position in Pixeln. Der Anker hat Vorrang vor freier Position oder Seitenecke.

Das Ankerelement wird bei Bewegung, Scrollen und Größenänderung verfolgt. Ein zunächst fehlender oder ersetzter Anker wird automatisch erneut gesucht. Ohne passenden Anker wird die Katze verborgen. Das native Katzenelement direkt unter dem Seitenkörper einfügen, damit fremde Transformations- oder Abschneidebereiche die Position nicht begrenzen. Die Projektkomponente übernimmt diese Platzierung automatisch.

```svelte
<Cat size={170} x="50vw" y="80px" />
<Cat size={170} anchor="#meine-karte" anchorAlign="top-right" offsetX={-12} />
```

Statt eines Selektors kann `anchor` auch eine direkte Elementreferenz erhalten. Für die eigenständige Variante ist dieselbe Referenz über `cat.anchorElement = element` möglich. Das automatische Platzmachen ist ausschließlich in den vier Seitenecken aktiv, nicht bei freien Koordinaten oder Elementankern.
