<!-- samtpfote | hallowelt42 | Sichtbare Namensnennung bei jeder Nutzung erforderlich. -->
<script>
  import { onMount } from 'svelte';
  import { CAT_NAME } from './config.js';
  let { size = 170, position = undefined, anchor = undefined, anchorAlign = 'top-right', x = undefined, y = undefined, offsetX = 0, offsetY = 0, sleepAfter = undefined, paused = false, coat = 'auto', lighting = 'neutral', creditMode = undefined, name = CAT_NAME, soundSrc = undefined, volume = undefined, zIndex = 10000, behavior = {}, onstate = undefined } = $props();
  let element = $state();
  $effect(()=>{
    if(!element || !(position || anchor || x!==undefined || y!==undefined))return;
    const portalMarker=document.createComment('samtpfote | hallowelt42');
    element.before(portalMarker);document.body.append(element);
    return()=>portalMarker.replaceWith(element);
  });
  onMount(() => { import('./widget.js').then(()=>{element?.configure?.(behavior);if(element)element.anchorElement=typeof anchor==='object'?anchor:null;}); });
  $effect(()=>{const target=anchor;if(element?.updatePlacement)element.anchorElement=typeof target==='object'?target:null;});
  $effect(()=>{const options=behavior;if(element?.configure)element.configure(options);});
  export function perform(action) { element?.perform?.(action); }
</script>
<samt-pfote bind:this={element} style={`--cat-size:${size}px;--cat-z-index:${zIndex}`} {position} anchor={typeof anchor==='string'?anchor:undefined} anchor-align={anchorAlign} {x} {y} offset-x={offsetX} offset-y={offsetY} {coat} {lighting} credit-mode={creditMode} cat-name={name} sound-src={soundSrc} volume={volume} sleep-after={sleepAfter} paused={paused ? '' : undefined} oncatstate={(event) => onstate?.(event.detail)}></samt-pfote>
