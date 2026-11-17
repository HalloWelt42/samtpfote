<script>
  import { onMount } from 'svelte';
  import Cat from './lib/Cat.svelte';
  let cat, state = $state('Neugierig'), current = $state('curious');
  let active = $state('auto'), size = $state(300), corner = $state('bottom-right'), docked = $state(false), paused = $state(false);
  let theme = $state('system'), fontScale = $state(100), settings = $state(false), tab = $state('play'), copied = $state(false);
  const actions = [
    {id:'auto', icon:'wand-magic-sparkles', name:'Ganz von selbst', desc:'Ein eigener kleiner Kopf'},
    {id:'petting',icon:'hand',name:'Streicheln',desc:'Ein bisschen Zuneigung'},
    {id:'stretching',icon:'arrows-up-down',name:'Strecken',desc:'Bis in die Zehenspitzen'},
    {id:'grooming',icon:'paw',name:'Putzen',desc:'Ordnung muss sein'},
    {id:'sleeping',icon:'moon',name:'Schlafen',desc:'Nur fünf Minütchen...'}
  ];
  const snippet = $derived(`<script type="module" src="/samtpfote.js"><\/script>\n\n<samt-pfote\n  position="${corner}"\n  sleep-after="35"\n  style="--cat-size: ${size}px"\n></samt-pfote>`);
  onMount(()=>{
    try {theme=localStorage.getItem('samt-theme')||'system';fontScale=Number(localStorage.getItem('samt-font'))||100;}catch{}
  });
  $effect(()=>{
    document.documentElement.dataset.theme=theme;
    document.documentElement.style.fontSize=`${fontScale}%`;
    try{localStorage.setItem('samt-theme',theme);localStorage.setItem('samt-font',String(fontScale));}catch{}
  });
  function act(id){active=id;paused=false;cat?.perform(id);}
  async function copy(){try{await navigator.clipboard.writeText(snippet);copied=true;setTimeout(()=>copied=false,2000);}catch{copied=false;}}
  function updateState(detail){state=detail.label;current=detail.state;if(['curious','waking','watching','drowsy'].includes(detail.state))active='auto';}
</script>
<svelte:head><title>Samtpfote - Ein kleines bisschen Leben</title></svelte:head>
<div class="page-shell">
  <header>
    <a class="wordmark" href="#spielplatz" aria-label="Samtpfote Startseite"><span class="brand-icon"><i class="fa-solid fa-cat" aria-hidden="true"></i></span>samtpfote<span class="brand-period">.</span></a>
    <nav aria-label="Hauptnavigation"><a href="#spielplatz" class="nav-active">Spielplatz</a><a href="#einbinden" onclick={()=>tab='embed'}>Einbinden <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a><button class="appearance" class:chosen={settings} aria-label="Darstellung einstellen" onclick={()=>settings=!settings}><i class="fa-solid fa-sliders" aria-hidden="true"></i></button></nav>
  </header>
  {#if settings}<section class="settings" aria-label="Darstellung"><label>Darstellung <select bind:value={theme}><option value="system">System</option><option value="light">Hell</option><option value="dark">Dunkel</option></select></label><div class="font-setting"><span>Schriftgröße</span><button aria-label="Schrift verkleinern" disabled={fontScale<=80} onclick={()=>fontScale=Math.max(80,fontScale-10)}>A-</button><output>{fontScale}%</output><button aria-label="Schrift vergrößern" disabled={fontScale>=150} onclick={()=>fontScale=Math.min(150,fontScale+10)}>A+</button></div></section>{/if}
  <main id="spielplatz">
    <section class="intro">
      <div class="eyebrow"><span></span> KLEINE PFOTEN. GROSSE PERSÖNLICHKEIT.</div>
      <h1>Ein kleines<br/>bisschen <span>Leben.</span><svg viewBox="0 0 100 18" aria-hidden="true"><path d="M3 13 Q43 0 95 8 M12 17 Q51 8 86 12"/></svg></h1>
      <p class="lede">Darf ich bleiben? Ich brauche nicht viel Platz.<br class="desktop"/> Nur eine kleine Ecke. Und ab und zu deine Maus.</p>
      <div class="intro-bottom"><div class="mini-avatar"><i class="fa-solid fa-paw" aria-hidden="true"></i></div><div><strong>Das ist Miso.</strong><p>Neugierig. Verschlafen. Immer dabei.</p></div></div>
      <div class="feature-line"><span><i class="fa-solid fa-check" aria-hidden="true"></i> Scharf in jeder Größe</span><span><i class="fa-solid fa-check" aria-hidden="true"></i> Ohne Bilddateien</span></div>
    </section>
    <section class="playground" aria-label="Interaktive Katzenvorschau">
      <div class="stage-top"><span class="stage-label"><span class="live-dot"></span> MISOS KLEINE WELT</span><span class="live-tag">LIVE</span></div>
      <div class="window-light" aria-hidden="true"><div></div><div></div><div></div><div></div></div>
      <div class="ambient ambient-one" aria-hidden="true">+</div><div class="ambient ambient-two" aria-hidden="true">+</div>
      <div class="stage-note">Psst. Sie hat dich schon gesehen.<svg viewBox="0 0 80 65" aria-hidden="true"><path d="M6 3 Q-1 42 65 48 M54 36 L68 49 L52 56"/></svg></div>
      <div class="cat-platform" class:empty={docked}>
        <Cat bind:this={cat} {size} position={docked ? corner : undefined} sleepAfter={35} {paused} onstate={updateState}/>
        {#if docked}<span class="docked-note"><i class="fa-solid fa-paw" aria-hidden="true"></i> Miso erkundet die Seitenecke.</span>{/if}
      </div>
      <div class="ground-line" aria-hidden="true"></div>
      <div class="stage-bottom"><span class="state-pill" aria-live="polite"><span class:asleep={current==='sleeping'}></span>{paused?'Macht eine Pause':state}</span><button class="pause" aria-label={paused?'Animation fortsetzen':'Animation pausieren'} title={paused?'Fortsetzen':'Pausieren'} onclick={()=>paused=!paused}><i class={`fa-solid fa-${paused?'play':'pause'}`} aria-hidden="true"></i></button></div>
    </section>
    <section class="workbench" id="einbinden">
      <div class="tabs" role="tablist" aria-label="Werkzeuge"><button role="tab" id="play-tab" aria-controls="play-panel" aria-selected={tab==='play'} class:active={tab==='play'} onclick={()=>tab='play'}><i class="fa-solid fa-paw" aria-hidden="true"></i> Kennenlernen</button><button role="tab" id="embed-tab" aria-controls="embed-panel" aria-selected={tab==='embed'} class:active={tab==='embed'} onclick={()=>tab='embed'}><i class="fa-solid fa-code" aria-hidden="true"></i> Ein Zuhause geben</button><span class="workbench-hint">Eine Katze macht, was sie will. Meistens.</span></div>
      {#if tab==='play'}<div role="tabpanel" id="play-panel" aria-labelledby="play-tab"><div class="action-grid">{#each actions as action}<button class="action" class:selected={active===action.id} aria-pressed={active===action.id} onclick={()=>act(action.id)}><span class="action-icon"><i class={`fa-solid fa-${action.icon}`} aria-hidden="true"></i></span><strong>{action.name}</strong><small>{action.desc}</small>{#if active===action.id}<span class="selection-dot"></span>{/if}</button>{/each}</div><div class="control-row"><label class="size-label" for="size"><i class="fa-solid fa-expand" aria-hidden="true"></i> Größe</label><input id="size" type="range" min="120" max="340" step="10" bind:value={size}/><output for="size">{size} px</output><span class="control-divider"></span><label class="position-label" for="corner">Lieblingsplatz</label><select id="corner" bind:value={corner}><option value="bottom-right">Unten rechts</option><option value="bottom-left">Unten links</option><option value="top-right">Oben rechts</option><option value="top-left">Oben links</option></select><label class="toggle-label"><input type="checkbox" bind:checked={docked}/><span class="toggle-track"></span> In der Seitenecke</label></div></div>
      {:else}<div class="embed-panel" role="tabpanel" id="embed-panel" aria-labelledby="embed-tab"><div><h2>Einziehen leicht gemacht.</h2><p>Die eigenständige Komponente funktioniert ohne weitere Bibliotheken. Datei einbinden, Lieblingsplatz wählen, fertig.</p><a class="download" href="./samtpfote.js" download><i class="fa-solid fa-download" aria-hidden="true"></i> Komponente herunterladen</a><p class="embed-hint">Die passende Komponente und Einbauanleitung liegen zusätzlich im Projektordner.</p></div><div class="code-block"><div><span>HTML</span><button onclick={copy}><i class={`fa-solid fa-${copied?'check':'copy'}`} aria-hidden="true"></i> {copied?'Kopiert':'Kopieren'}</button></div><pre><code>{snippet}</code></pre></div></div>{/if}
    </section>
    <div class="below-note"><i class="fa-regular fa-lightbulb" aria-hidden="true"></i><p>Bewege deine Maus. Lass dir Zeit. Nach 35 Sekunden Ruhe macht Miso ein Nickerchen.<br/>Ein Scrollen oder eine Mausbewegung holt sie sanft zurück.</p></div>
    <section class="details"><div><span class="detail-number">01 / AUFMERKSAM</span><h2>Immer ein Auge auf dich.</h2><p>Der Blick folgt deiner Maus. Der Kopf neigt sich ein wenig. Kleine Bewegungen, die Persönlichkeit zeigen.</p></div><div><span class="detail-number">02 / GANZ ENTSPANNT</span><h2>Mit eigenem Rhythmus.</h2><p>Mal putzt sie ihre Pfote, mal streckt sie sich. Und wenn es ruhig wird, fallen langsam die Augen zu.</p></div><div><span class="detail-number">03 / ÜBERALL ZU HAUSE</span><h2>Deine Seite. Ihre Ecke.</h2><p>Vier Lieblingsplätze, freie Größe, transparenter Hintergrund. Die kleine Begleiterin zieht einfach mit ein.</p></div></section>
  </main>
  <footer><span><i class="fa-solid fa-paw" aria-hidden="true"></i> Mit Ruhe und Liebe zum Detail.</span><span>Ein kleiner Mitbewohner für das große Netz.</span></footer>
</div>
