<!-- samtpfote | hallowelt42 | Sichtbare Namensnennung bei jeder Nutzung erforderlich. -->
<script>
  import { onMount, tick } from 'svelte';
  import Cat from './lib/Cat.svelte';
  import Room from './lib/Room.svelte';
  import EyeStudy from './lib/EyeStudy.svelte';
  import { CAT_NAME, possessive } from './lib/config.js';
  let cat = $state(), state = $state('Neugierig'), current = $state('curious');
  let active = $state('auto'), size = $state(300), corner = $state('bottom-right'), docked = $state(false), paused = $state(false);
  let theme = $state('system'), fontScale = $state(100), settings = $state(false), tab = $state('play'), copied = $state(false), inspectorOpen = $state(false);
  let coat = $state('black'), systemDark = $state(false), sound = $state(true), volume = $state(35), sleepAfter = $state(35);
  const resolvedTheme = $derived(theme==='system' ? (systemDark?'dark':'light') : theme);
  const resolvedCoat = $derived(coat==='auto' ? (resolvedTheme==='dark'?'cream':'black') : coat);
  const actions = [
    {id:'auto', icon:'wand-magic-sparkles', name:'Ganz von selbst', desc:`${possessive(CAT_NAME)} eigener Rhythmus`},
    {id:'petting',icon:'heart',name:'Knuddeln',desc:'Ein bisschen Zuneigung'},
    {id:'swatting',icon:'paw',name:'Tatzen',desc:'Was ist da vor der Nase?'},
    {id:'stretching',icon:'arrows-up-down',name:'Strecken',desc:'Bis in die Zehenspitzen'},
    {id:'grooming',icon:'hand-sparkles',name:'Putzen',desc:'Eine saubere Sache'},
    {id:'sleeping',icon:'moon',name:'Träumen',desc:'Von kleinen Mäusen'}
  ];
  const snippet = $derived(`<script type="module" src="/samtpfote/samtpfote.js"><\/script>\n\n<samt-pfote\n  position="${corner}"\n  coat="${coat}"\n  sleep-after="${sleepAfter}"\n${sound?'  sound-src="/samtpfote/audio/schnurren.mp3"\n':''}  style="--cat-size: ${size}px"\n></samt-pfote>\n\n<!-- Die sichtbare Signatur hallowelt42 bleibt erhalten. -->`);
  onMount(()=>{
    const media=matchMedia('(prefers-color-scheme: dark)');systemDark=media.matches;
    const change=()=>systemDark=media.matches;media.addEventListener('change',change);
    try {theme=localStorage.getItem('samt-theme')||'system';fontScale=Number(localStorage.getItem('samt-font'))||100;}catch{}
    return()=>media.removeEventListener('change',change);
  });
  $effect(()=>{
    document.documentElement.dataset.theme=resolvedTheme;
    document.documentElement.style.fontSize=`${fontScale}%`;
    try{localStorage.setItem('samt-theme',theme);localStorage.setItem('samt-font',String(fontScale));}catch{}
  });
  async function act(id){active=id;paused=false;tab='play';await tick();cat?.perform(id);}
  async function copy(){try{await navigator.clipboard.writeText(snippet);copied=true;setTimeout(()=>copied=false,2000);}catch{copied=false;}}
  function updateState(detail){state=detail.label;current=detail.state;if(['curious','waking','watching','drowsy'].includes(detail.state))active='auto';}
</script>
<svelte:head><title>samtpfote von hallowelt42 - {possessive(CAT_NAME)} kleines Zuhause</title></svelte:head>
<div class="desktop-app">
  <header class="app-header">
    <a class="wordmark" href="./" aria-label="samtpfote von hallowelt42"><span class="brand-cat"><i class="fa-solid fa-cat" aria-hidden="true"></i></span><span>samtpfote<small>ein Geschenk von <strong>hallowelt42</strong></small></span></a>
    <nav class="view-tabs" aria-label="Ansicht"><button class:active={tab==='play'} aria-label={`${possessive(CAT_NAME)} Zuhause`} onclick={()=>tab='play'}><i class="fa-solid fa-house" aria-hidden="true"></i><span>{possessive(CAT_NAME)} Zuhause</span></button><button class:active={tab==='embed'} aria-label="Mitnehmen" onclick={()=>tab='embed'}><i class="fa-solid fa-code" aria-hidden="true"></i><span>Mitnehmen</span></button><button class:active={tab==='eyes'} aria-label="Augenstudie" onclick={()=>tab='eyes'}><i class="fa-regular fa-eye" aria-hidden="true"></i><span>Augenstudie</span></button></nav>
    <div class="header-palette" aria-label="Fellfarbe und Lichtautomatik"><div class="header-coat-options" aria-label="Fellfarbe">{#each [{id:'black',name:'Schwarz'},{id:'cream',name:'Creme'},{id:'smoke',name:'Warmgrau'}] as item}<button class="coat-option" class:chosen={coat===item.id} aria-pressed={coat===item.id} onclick={()=>coat=item.id}><span class={`coat-swatch ${item.id}`}><i class="fa-solid fa-check" aria-hidden="true"></i></span><span>{item.name}</span></button>{/each}</div><label class="toggle-label header-auto" title="Passend zum Licht wechseln"><input type="checkbox" checked={coat==='auto'} onchange={(e)=>coat=e.currentTarget.checked?'auto':resolvedCoat}/><span class="toggle-track"></span><span>Auto</span></label></div>
    <div class="header-actions"><span class="version">ATELIER / 02</span><button class="icon-button" class:active={settings} aria-label="Darstellung einstellen" aria-expanded={settings} onclick={()=>settings=!settings}><i class="fa-solid fa-sliders" aria-hidden="true"></i></button><button class="icon-button mobile-inspector" class:active={inspectorOpen} aria-label="Katzeneinstellungen öffnen" aria-expanded={inspectorOpen} onclick={()=>inspectorOpen=!inspectorOpen}><i class="fa-solid fa-gear" aria-hidden="true"></i></button></div>
  </header>
  {#if settings}<section class="appearance-panel" aria-label="Darstellungseinstellungen"><div class="panel-heading"><strong>Mach es dir gemütlich.</strong><button class="icon-button" aria-label="Darstellung schließen" onclick={()=>settings=false}><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></div><div class="field"><span>Darstellung</span><div class="theme-options" aria-label="Darstellung wählen">{#each [{id:'light',label:'Hell',icon:'sun'},{id:'dark',label:'Dunkel',icon:'moon'},{id:'system',label:'System',icon:'desktop'}] as option}<button class:chosen={theme===option.id} aria-pressed={theme===option.id} onclick={()=>theme=option.id}><i class={`fa-solid fa-${option.icon}`} aria-hidden="true"></i>{option.label}</button>{/each}</div></div><div class="font-setting"><span>Schriftgröße</span><div><button aria-label="Schrift verkleinern" disabled={fontScale<=80} onclick={()=>fontScale=Math.max(80,fontScale-10)}>A-</button><output>{fontScale}%</output><button aria-label="Schrift vergrößern" disabled={fontScale>=150} onclick={()=>fontScale=Math.min(150,fontScale+10)}>A+</button></div></div><p>Deine Darstellung wird auf diesem Gerät gespeichert.</p></section>{/if}
  <div class="workspace" class:eye-mode={tab==='eyes'}>
    <aside class="behavior-panel" aria-label="Verhalten auswählen">
      <div class="rail-heading"><h1>Das ist {CAT_NAME}</h1></div>
      <div class="behavior-list">{#each actions as action}<button class="behavior-button" class:selected={active===action.id} aria-pressed={active===action.id} aria-label={action.name} title={action.name} onclick={()=>act(action.id)}><span class="behavior-icon"><i class={`fa-solid fa-${action.icon}`} aria-hidden="true"></i></span><span class="behavior-text"><strong>{action.name}</strong><small>{action.desc}</small></span></button>{/each}</div>

    </aside>
    <main class="main-panel">
      {#if tab==='play'}
      <div class="workspace-toolbar"><div><span class="live-dot"></span><span>Das Wohnzimmer</span><span class="toolbar-separator">/</span><span class="muted">Vorschau</span></div><div class="scene-actions"><button class="icon-button" aria-label={resolvedTheme==='dark'?'Hellen Modus testen':'Dunklen Modus testen'} title="Hell und Dunkel vergleichen" onclick={()=>theme=resolvedTheme==='dark'?'light':'dark'}><i class={`fa-solid fa-${resolvedTheme==='dark'?'sun':'moon'}`} aria-hidden="true"></i></button><button class="icon-button" aria-label={paused?'Animation fortsetzen':'Animation pausieren'} title={paused?'Fortsetzen':'Pausieren'} onclick={()=>paused=!paused}><i class={`fa-solid fa-${paused?'play':'pause'}`} aria-hidden="true"></i></button></div></div>
      <section class="scene" aria-label="Interaktive Katzenvorschau im Wohnzimmer">
        <Room night={resolvedTheme==='dark'}/>
        <div class="scene-caption"><span class="scene-caption-line"></span><span>{resolvedTheme==='dark'?'Ein gemütlicher Abend.':'Ein Platz an der Sonne.'}</span></div>
        <div class="cat-platform"><Cat bind:this={cat} {size} position={docked ? corner : undefined} {sleepAfter} {paused} coat={resolvedCoat} lighting={resolvedTheme==='dark'?'night':'day'} creditMode="external" soundSrc={sound?'./audio/schnurren.mp3':undefined} {volume} onstate={updateState}/>{#if docked}<span class="empty-note"><i class="fa-solid fa-paw" aria-hidden="true"></i>{CAT_NAME} ist in der Seitenecke.</span>{/if}</div>
        <div class="scene-bottom"><div class="state-pill" aria-live="polite"><span class:asleep={current==='sleeping'}></span>{paused?'Macht eine Pause':state}</div><button class="sound-button" class:enabled={sound} aria-pressed={sound} onclick={()=>sound=!sound} title={sound?'Schnurren ausschalten':'Schnurren einschalten'}><i class={`fa-solid fa-volume-${sound?'low':'xmark'}`} aria-hidden="true"></i><span>{sound?'Schnurren an':'Schnurren aus'}</span></button></div>
      </section>
      <div class="interaction-hint"><i class="fa-solid fa-computer-mouse" aria-hidden="true"></i><p>Bleib mit der Maus kurz vor ihrer Nase. Vielleicht zeigt sie dir ihre Pfötchen.</p><span class="hint-badge">PROBIER MAL</span></div>
      {:else if tab==='eyes'}
      <EyeStudy/>
      {:else}
      <div class="workspace-toolbar"><div><i class="fa-solid fa-gift" aria-hidden="true"></i><span>Ein neues Zuhause</span></div><span class="muted">Kostenlos mit Namensnennung</span></div>
      <section class="embed-content" aria-label="Einbauanleitung"><div class="embed-intro"><span class="section-kicker">VON MIR FÜR EUCH</span><h1>Eine kleine Katze.<br/>Für deine Webseite.</h1><p>Ein Geschenk von <strong>hallowelt42</strong>. Nimm {CAT_NAME} mit, gib ihr eine gemütliche Ecke und behalte ihre kleine Signatur sichtbar.</p></div><div class="download-row"><a class="primary-button" href="./samtpfote-paket.zip" download><i class="fa-solid fa-box-open" aria-hidden="true"></i> Komplettes Paket</a><a class="secondary-button" href="./samtpfote.js" download><i class="fa-solid fa-download" aria-hidden="true"></i> Nur die Komponente</a></div><ol class="steps"><li><strong>Dateien zu dir holen</strong><p>Paket entpacken. Den Ordner <code>samtpfote</code> mit Skript und optionalem Schnurren in das öffentliche Verzeichnis deiner Webseite kopieren.</p></li><li><strong>Einziehen lassen</strong><p>Diesen Code in deine Seite einfügen. Alle Dateien werden von deiner eigenen Webseite geladen.</p></li></ol><div class="code-block"><div><span>DEINE EINSTELLUNGEN / HTML</span><button onclick={copy}><i class={`fa-solid fa-${copied?'check':'copy'}`} aria-hidden="true"></i> {copied?'Kopiert':'Kopieren'}</button></div><pre><code>{snippet}</code></pre></div><div class="attribution-note"><i class="fa-solid fa-heart" aria-hidden="true"></i><div><strong>Ein Geschenk mit einer kleinen Bitte.</strong><p>Bei jeder Nutzung muss die sichtbare Nennung <b>hallowelt42 / samtpfote</b> erhalten bleiben, ebenso die Herkunftshinweise im Code. Private und gewerbliche Webseiten sind erlaubt. Die vollständigen Bedingungen stehen im Paket.</p></div></div><a class="text-link" href="./ANLEITUNG.html" target="_blank" rel="noreferrer">Ausführliche Einbauanleitung öffnen <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a><div class="audio-credit">Echte Schnurr-Aufnahme: Adam Cuerden, gemeinfrei. <a href="https://commons.wikimedia.org/wiki/File:Whiskers%27_purr.ogg" target="_blank" rel="noreferrer">Herkunft und Freigabe</a></div></section>
      {/if}
    </main>
    <aside class="inspector" class:open={inspectorOpen} aria-label="Katzeneinstellungen"><div class="inspector-dismiss"><button class="icon-button mobile-inspector" aria-label="Katzeneinstellungen schließen" onclick={()=>inspectorOpen=false}><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></div><section class="inspector-section"><label class="range-label" for="size">Größe <output>{size} px</output></label><input id="size" style={`--range-fill:${(size-120)/3}%`} type="range" min="120" max="420" step="10" bind:value={size}/><fieldset class="corner-group"><legend>Lieblingsplatz</legend><div class="corner-grid">{#each [{id:'top-left',label:'Oben links',icon:'arrow-up-left'},{id:'top-right',label:'Oben rechts',icon:'arrow-up-right'},{id:'bottom-left',label:'Unten links',icon:'arrow-down-left'},{id:'bottom-right',label:'Unten rechts',icon:'arrow-down-right'}] as place}<button class:chosen={corner===place.id} aria-pressed={corner===place.id} onclick={()=>corner=place.id}><span class={`corner-symbol ${place.id}`} aria-hidden="true"></span>{place.label}</button>{/each}</div></fieldset><label class="toggle-label"><input type="checkbox" bind:checked={docked}/><span class="toggle-track"></span><span>In der Seitenecke testen</span></label></section><section class="inspector-section"><div class="inspector-label"><i class="fa-solid fa-moon" aria-hidden="true"></i><h3>Ihr eigener Rhythmus</h3></div><label class="range-label" for="sleep">Schlafen nach <output>{sleepAfter} Sek.</output></label><input id="sleep" style={`--range-fill:${(sleepAfter-10)/.8}%`} type="range" min="10" max="90" step="5" bind:value={sleepAfter}/><p>Nach einer Weile träumt sie von einer ganz besonderen Maus.</p></section><section class="inspector-section"><div class="inspector-label"><i class="fa-solid fa-volume-low" aria-hidden="true"></i><h3>Echtes Schnurren</h3></div><label class="toggle-label"><input type="checkbox" bind:checked={sound}/><span class="toggle-track"></span><span>Beim Knuddeln schnurren</span></label>{#if sound}<label class="range-label" for="volume">Lautstärke <output>{volume}%</output></label><input id="volume" style={`--range-fill:${(volume-5)/.7}%`} type="range" min="5" max="75" step="5" bind:value={volume}/>{/if}</section></aside>
  </div>
  <footer class="statusbar"><span><span class="live-dot"></span> {paused?'Animation pausiert':'Mit Liebe verschenkt.'}</span><span>SVG <span class="status-dot">/</span> Alles lokal <span class="status-dot">/</span> <a href="https://github.com/HalloWelt42/samtpfote" target="_blank" rel="noreferrer">hallowelt42 / samtpfote <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a></span></footer>
</div>
