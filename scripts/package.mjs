// samtpfote | hallowelt42 | Herkunftshinweis erhalten.
import { copyFileSync, cpSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { CAT_NAME, AUTHOR, PROJECT_NAME, safeText } from '../src/lib/config.js';
const name=safeText(CAT_NAME);
const guide=`<!doctype html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="author" content="${AUTHOR}"><title>${PROJECT_NAME} - Einbauanleitung</title><style>body{font:17px/1.75 system-ui,sans-serif;background:#f8f6ef;color:#3c4034;margin:0;padding:40px 22px}main{max-width:820px;margin:auto}h1,h2{line-height:1.3;font-weight:650}h1{font-size:2.3rem}h2{margin-top:2.2em;font-size:1.35rem}p,li{max-width:76ch}a{color:#5d754b}pre{padding:20px;background:#edf0e4;border:1px solid #d9dfce;border-radius:10px;overflow:auto;font-size:14px;line-height:1.8}code{color:#596b48}table{border-collapse:collapse;width:100%;font-size:14px}td,th{padding:11px;border:1px solid #d9dfce;text-align:left}.note{padding:17px 20px;border-left:3px solid #8c9e76;background:#edf0e4}footer{border-top:1px solid #d9dfce;margin-top:45px;padding-top:20px;font-size:14px}@media(prefers-color-scheme:dark){body{background:#242b22;color:#dfe5d6}a,code{color:#b0c398}pre,.note{background:#303c29}td,th,pre,footer{border-color:#4a5841}}</style></head><body><main><p>${AUTHOR} / ${PROJECT_NAME}</p><h1>${name} zieht bei dir ein.</h1><p>Eine kleine interaktive Katze für deine Webseite. Kostenlos für private und gewerbliche Nutzung, mit verpflichtender Namensnennung von <strong>${AUTHOR}</strong>.</p><div class="note"><strong>Wichtig:</strong> Die sichtbare Signatur "${AUTHOR} / ${PROJECT_NAME}" und die Herkunftshinweise im Quellcode müssen erhalten bleiben. Die vollständigen Nutzungsbedingungen stehen in <a href="./LIZENZ.txt">LIZENZ.txt</a>.</div><h2>1. Das Paket ablegen</h2><p>Entpacke das Paket. Kopiere den enthaltenen Ordner <code>samtpfote</code> in das öffentliche Verzeichnis deiner Webseite. Er enthält die fertige Datei <code>samtpfote.js</code> und die optionale Schnurr-Aufnahme im Unterordner <code>audio</code>. Die Dateien werden von deiner eigenen Webseite ausgeliefert. Es gibt keine externen Skriptaufrufe oder Schriftanfragen.</p><p>Die Beispieldatei <code>beispiel.html</code> zeigt den vollständigen Einbau. Öffne sie über einen lokalen Webserver. Das direkte Öffnen von Modulen als lokale Datei wird von Browsern häufig eingeschränkt.</p><h2>2. Diesen Code einfügen</h2><pre><code>&lt;script type="module" src="/samtpfote/samtpfote.js"&gt;&lt;/script&gt;

&lt;samt-pfote
  cat-name="${name}"
  position="bottom-right"
  coat="black"
  sleep-after="35"
  style="--cat-size: 220px; --cat-offset: 16px"
&gt;&lt;/samt-pfote&gt;</code></pre><p>Die Katze hat einen transparenten Hintergrund. Sofa, Lampe und Pflanze gehören ausschließlich zur Demo und werden nicht eingebunden. Ohne <code>position</code> steht die Katze im normalen Dokumentfluss. Verwende eine freie Ecke, damit sie keine Bedienelemente verdeckt.</p><h2>3. Deine Einstellungen</h2><table><thead><tr><th>Attribut oder Stil</th><th>Wirkung</th></tr></thead><tbody><tr><td><code>cat-name</code></td><td>Name der Katze. Ohne Angabe gilt der zentrale Name ${name}. Die Urhebernennung bleibt davon unabhängig.</td></tr><tr><td><code>position</code></td><td><code>bottom-right</code>, <code>bottom-left</code>, <code>top-right</code> oder <code>top-left</code>.</td></tr><tr><td><code>coat</code></td><td><code>black</code> für warmes Schwarz, <code>cream</code> für Creme, <code>smoke</code> für Warmgrau, <code>auto</code> für Schwarz im hellen und Creme im dunklen Systemmodus.</td></tr><tr><td><code>sleep-after</code></td><td>Sekunden bis zum Einschlafen, Standard 35. Schläfrigkeit beginnt nach 62 Prozent dieser Zeit.</td></tr><tr><td><code>--cat-size</code></td><td>Breite einschließlich Bewegungsraum. Die Katze selbst ist etwas kleiner. Standard 220px; auf kleinen Bildschirmen in Seitenecken auf 35vw begrenzt.</td></tr><tr><td><code>--cat-offset</code></td><td>Abstand zur Ecke, Standard 16px zuzüglich sicherer Bildschirmränder.</td></tr><tr><td><code>--cat-z-index</code></td><td>Darstellungsebene der festen Katze, Standard 50.</td></tr><tr><td><code>paused</code></td><td>Das vorhandene Attribut pausiert. Zum Fortsetzen entfernen.</td></tr></tbody></table><h2>4. Echtes Schnurren einschalten</h2><p>Das Schnurren bleibt ohne Angabe einer Datei ausgeschaltet. Für echtes Schnurren beim Anklicken oder Knuddeln ergänze:</p><pre><code>&lt;samt-pfote
  position="bottom-right"
  coat="black"
  sound-src="/samtpfote/audio/schnurren.mp3"
  volume="35"
&gt;&lt;/samt-pfote&gt;</code></pre><p>Die Lautstärke reicht von 0 bis 100. Ton startet ausschließlich durch eine bewusste Streichelaktion und wird weich ein- und ausgeblendet. Browser können Tonwiedergabe einschränken. Die echte Aufnahme ist gemeinfrei; Herkunft und Bearbeitung stehen in <a href="./HERKUNFT.txt">HERKUNFT.txt</a>.</p><h2>5. Verhalten ausprobieren</h2><p>Augen und Kopf folgen dem Zeiger. Bleibt er etwa 1,3 Sekunden in der Nähe der Nase, tatzt ${name} gegen eine gedachte Scheibe und zeigt die Pfotenballen. Nach einer Ruhepause folgt ein Nickerchen. Die Schlafzeichen steigen auf und verschwimmen. Nach acht Sekunden Schlaf taucht gelegentlich eine Traumwolke mit einer Computermaus auf. Mausbewegung, Scrollen, Tastatur und Berührung wecken die Katze sanft. Bei reduzierter Bewegung entfallen dekorative Dauerbewegungen und zufällige Aktionen.</p><pre><code>const cat = document.querySelector('samt-pfote');
cat.perform('petting');    // Knuddeln
cat.perform('swatting');   // Tatzen
cat.perform('stretching'); // Strecken
cat.perform('grooming');   // Putzen
cat.perform('sleeping');   // Träumen
cat.perform('auto');       // Eigener Rhythmus
cat.addEventListener('catstate', ({ detail }) =&gt; {
  console.log(detail.state, detail.label);
});</code></pre><h2>6. Komponente im eigenen Projekt</h2><p>Der Ordner <code>komponente</code> enthält den Quellcode einschließlich <code>Cat.svelte</code>. Übernimm den vollständigen Ordner. Die Komponente lädt das Browsermodul erst nach dem Einhängen und eignet sich auch für serverseitig gerenderte Seiten.</p><pre><code>&lt;script&gt;
  import Cat from './komponente/Cat.svelte';
&lt;/script&gt;

&lt;Cat size={220} position="bottom-right" coat="black" /&gt;</code></pre><h2>7. Einen zentralen Namen verwenden</h2><p>Im Quellcode steht der zentrale Wert <code>CAT_NAME</code> in <code>config.js</code>. Die Demo und die erzeugte Anleitung nutzen ihn gemeinsam. Für einzelne Einbindungen verwende <code>cat-name</code> oder die Komponenteneigenschaft <code>name</code>. Die Namensänderung ersetzt nicht die sichtbare Pflichtnennung "${AUTHOR} / ${PROJECT_NAME}".</p><footer>Ein Geschenk von <strong>${AUTHOR}</strong>. ${PROJECT_NAME} darf kostenlos mitgenommen werden, solange die Namensnennung erhalten bleibt.</footer></main></body></html>`;
writeFileSync('public/ANLEITUNG.html',guide);
copyFileSync('LIZENZ.txt','public/LIZENZ.txt');copyFileSync('HERKUNFT.txt','public/HERKUNFT.txt');
const temp=mkdtempSync(join(tmpdir(),'samtpfote-paket-'));
mkdirSync(join(temp,'samtpfote','audio'),{recursive:true});
copyFileSync('public/samtpfote.js',join(temp,'samtpfote','samtpfote.js'));
copyFileSync('public/audio/schnurren.mp3',join(temp,'samtpfote','audio','schnurren.mp3'));
copyFileSync('public/katze.svg',join(temp,'samtpfote','katze.svg'));
for(const file of ['ANLEITUNG.html','LIZENZ.txt','HERKUNFT.txt'])copyFileSync(`public/${file}`,join(temp,file));
mkdirSync(join(temp,'komponente'));
for(const file of ['Cat.svelte','art.js','behavior.js','coats.js','config.js','motion.js','widget.js'])copyFileSync(`src/lib/${file}`,join(temp,'komponente',file));
const example=`<!doctype html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="author" content="${AUTHOR}"><title>${PROJECT_NAME} - Einbaubeispiel</title><style>body{background:#f7f5ed;color:#424737;font:18px/1.8 system-ui,sans-serif;padding:8vw;min-height:130vh}main{max-width:38rem}a{color:#61774c}</style></head><body><main><h1>${name} ist eingezogen.</h1><p>Bewege die Maus. Bleib kurz vor ihrer Nase. Streichele sie mit einem Klick. Nach einer Ruhepause schläft sie ein.</p><p>Die Schnurr-Aufnahme startet erst beim Streicheln.</p><a href="./ANLEITUNG.html">Einbauanleitung öffnen</a><p>Ein Geschenk von ${AUTHOR}. Die sichtbare Signatur muss erhalten bleiben.</p></main><script type="module" src="./samtpfote/samtpfote.js"></script><samt-pfote position="bottom-right" coat="black" sound-src="./samtpfote/audio/schnurren.mp3" style="--cat-size:240px"></samt-pfote></body></html>`;
writeFileSync(join(temp,'beispiel.html'),example);
writeFileSync('public/beispiel.html',example.replace('./samtpfote/samtpfote.js','./samtpfote.js').replace('./samtpfote/audio/','./audio/'));
const archive=join(temp,'paket.zip');
execFileSync('zip',['-q','-r',archive,'samtpfote','komponente','beispiel.html','ANLEITUNG.html','LIZENZ.txt','HERKUNFT.txt'],{cwd:temp});
copyFileSync(archive,resolve('public/samtpfote-paket.zip'));
