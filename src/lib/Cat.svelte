<!-- samtpfote | hallowelt42 | Sichtbare Namensnennung bei jeder Nutzung erforderlich. -->
<script>
  import { onMount } from 'svelte';
  import { CAT_NAME } from './config.js';
  let { size = 220, position = undefined, sleepAfter = 35, paused = false, coat = 'auto', lighting = 'neutral', creditMode = undefined, name = CAT_NAME, soundSrc = undefined, volume = 35, zIndex = 10000, onstate = undefined } = $props();
  let element = $state();
  $effect(()=>{
    if(!element || !position)return;
    const anchor=document.createComment('samtpfote | hallowelt42');
    element.before(anchor);document.body.append(element);
    return()=>anchor.replaceWith(element);
  });
  onMount(() => { import('./widget.js'); });
  export function perform(action) { element?.perform?.(action); }
</script>
<samt-pfote bind:this={element} style={`--cat-size:${size}px;--cat-z-index:${zIndex}`} {position} {coat} {lighting} credit-mode={creditMode} cat-name={name} sound-src={soundSrc} volume={volume} sleep-after={sleepAfter} paused={paused ? '' : undefined} oncatstate={(event) => onstate?.(event.detail)}></samt-pfote>
