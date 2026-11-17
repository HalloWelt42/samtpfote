<script>
  import { onMount } from 'svelte';
  let { size = 220, position = undefined, sleepAfter = 35, paused = false, onstate = undefined } = $props();
  let element;
  onMount(() => { import('./widget.js'); });
  export function perform(action) { element?.perform?.(action); }
</script>
<samt-pfote bind:this={element} style={`--cat-size:${size}px`} {position} sleep-after={sleepAfter} paused={paused ? '' : undefined} oncatstate={(event) => onstate?.(event.detail)}></samt-pfote>
