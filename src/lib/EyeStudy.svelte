<!-- samtpfote | hallowelt42 | Getrennte Augenstudie. -->
<script>
  import { onMount } from 'svelte';
  import { eyeStudyArt, lidPath } from './eye-art.js';
  import { CAT_NAME } from './config.js';
  import { clamp, follow } from './behavior.js';
  let root, pupil = $state(40), automatic = $state(true), blink = ()=>{};
  const original=eyeStudyArt('eye-original'), revised=eyeStudyArt('eye-revised',true);
  onMount(()=>{
    let raf,last=0,blinkStart=-10000,next=performance.now()+3000,gx=0,gy=0,target={x:0,y:0};
    const abort=new AbortController(),media=matchMedia('(prefers-reduced-motion: reduce)');
    const old=root.querySelector('.eye-original'),fresh=root.querySelector('.eye-revised');
    const parts=Object.fromEntries([...fresh.querySelectorAll('[data-study]')].map(el=>[el.dataset.study,el]));
    blink=()=>{blinkStart=performance.now();next=blinkStart+4500+Math.random()*2500;};
    window.addEventListener('pointermove',e=>{const r=root.getBoundingClientRect();target={x:clamp((e.clientX-r.left-r.width/2)/(r.width*.6),-1,1),y:clamp((e.clientY-r.top-r.height*.4)/200,-1,1)};},{signal:abort.signal,passive:true});
    const frame=(now)=>{
      const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
      if(automatic&&!media.matches&&now>next)blink();
      const age=(now-blinkStart)/1000;
      let open=1;
      if(age>=0&&age<.36){open=age<.13?1-Math.sin(age/.13*Math.PI/2):1-Math.cos((age-.13)/.23*Math.PI/2);}
      gx=follow(gx,target.x,7,dt);gy=follow(gy,target.y,7,dt);
      for(const [side,cx] of [['l',119],['r',198]]){
        old.querySelector(`[data-part="eye-${side}"]`).setAttribute('transform',`translate(${cx} 143) scale(1 ${Math.max(.015,open)}) translate(${-cx} -143)`);
        old.querySelector(`[data-part="pupil-${side}"]`).setAttribute('transform',`translate(${gx*7} ${gy*4})`);
        parts[`lid-${side}`].setAttribute('d',lidPath(cx,Math.max(.005,open)));
        parts[`socket-${side}`].setAttribute('d',lidPath(cx,Math.max(.005,open)));
        parts[`iris-${side}`].setAttribute('transform',`translate(${gx*5} ${gy*3})`);
        const rx=3+pupil*.145;
        parts[`pupil-${side}`].setAttribute('d',`M${cx} 120C${cx+rx} 127 ${cx+rx} 157 ${cx} 166C${cx-rx} 157 ${cx-rx} 127 ${cx} 120Z`);
        parts[`reflection-${side}`].setAttribute('transform',`translate(${gx*.8} ${gy*.4})`);
        parts[`upper-${side}`].setAttribute('d',`M${cx-24} 143Q${cx-15} ${143-27*open} ${cx} ${143-27*open}Q${cx+15} ${143-27*open} ${cx+24} 143`);
        parts[`lower-${side}`].setAttribute('d',`M${cx-24} 143Q${cx-15} ${143+25*open} ${cx} ${143+25*open}Q${cx+15} ${143+25*open} ${cx+24} 143`);
      }
      raf=requestAnimationFrame(frame);
    };
    const resume=()=>{cancelAnimationFrame(raf);last=0;if(!document.hidden)raf=requestAnimationFrame(frame);};
    document.addEventListener('visibilitychange',resume,{signal:abort.signal});resume();
    return()=>{abort.abort();cancelAnimationFrame(raf);};
  });
</script>
<section bind:this={root} class="eye-study" aria-label="Separate Augenstudie">
  <div class="eye-study-heading"><span class="section-kicker">SEPARATER VERSUCH</span><h1>Ein neuer Blick für {CAT_NAME}.</h1><p>Bewege die Maus und vergleiche das Blinzeln. Die Hauptkatze bleibt unverändert.</p></div>
  <div class="eye-comparison"><div class="eye-card"><div class="eye-card-title"><strong>Bisher</strong><span>Das Auge wird gestaucht</span></div><div class="eye-original">{@html original}</div></div><div class="eye-card"><div class="eye-card-title"><strong>Lidbewegung</strong><span>Iris und Reflexe bleiben in Form</span></div><div class="eye-revised">{@html revised}</div></div></div>
  <div class="eye-controls"><button class="primary-button" onclick={()=>blink()}><i class="fa-regular fa-eye" aria-hidden="true"></i> Blinzeln testen</button><label class="toggle-label"><input type="checkbox" bind:checked={automatic}/><span class="toggle-track"></span><span>Natürliches Blinzeln</span></label><div class="pupil-control"><label class="range-label" for="pupil">Pupillenweite <output>{pupil}%</output></label><input id="pupil" type="range" min="0" max="100" bind:value={pupil} style={`--range-fill:${pupil}%`}/></div></div>
  <p class="eye-note">Die neue Variante hat eine fein strukturierte goldene Iris, eine schlitzförmige Pupille und getrennte Lichtreflexe. Die Lider schließen sich darüber.</p>
</section>
