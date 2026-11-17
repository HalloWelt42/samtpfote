<!-- samtpfote | hallowelt42 | Sichtbare Namensnennung bei jeder Nutzung erforderlich. -->
<script>
  import { onMount } from 'svelte';
  import { CAT_NAME } from './config.js';
  let { size = 220, position = undefined, sleepAfter = 35, paused = false, coat = 'auto', creditMode = undefined, name = CAT_NAME, soundSrc = undefined, volume = 35, onstate = undefined } = $props();
  let element;
  onMount(() => { import('./widget.js'); });
  export function perform(action) { element?.perform?.(action); }
</script>
<samt-pfote bind:this={element} style={`--cat-size:${size}px`} {position} {coat} credit-mode={creditMode} cat-name={name} sound-src={soundSrc} volume={volume} sleep-after={sleepAfter} paused={paused ? '' : undefined} oncatstate={(event) => onstate?.(event.detail)}></samt-pfote>
