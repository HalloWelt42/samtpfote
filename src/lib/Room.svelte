<!-- samtpfote | hallowelt42 | Hintergrund ausschließlich für die Demo. -->
<script>
  import { onMount } from 'svelte';
  let { night = false } = $props();
  let room;
  onMount(()=>{
    const scene=room.parentElement;
    const align=()=>{
      const {width,height}=scene.getBoundingClientRect();
      const scale=Math.max(width/1536,height/1024);
      const imageHeight=1024*scale;
      const seatY=(height-imageHeight)/2+imageHeight*.635;
      scene.style.setProperty('--seat-y',`${seatY}px`);
    };
    const observer=new ResizeObserver(align);observer.observe(scene);align();
    return()=>observer.disconnect();
  });
</script>
<div bind:this={room} class="room-backdrop" class:night aria-hidden="true">
  <img class="room-day" src="./images/wohnzimmer-tag.webp" alt="" draggable="false" />
  <img class="room-night" src="./images/wohnzimmer-abend.webp" alt="" draggable="false" />
</div>
