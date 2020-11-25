<script lang="ts">
  import { windows } from './stores/windows';
  import Window from './Window.svelte';
</script>

{#each $windows as { id, faviconUrl, title, content, xPos, yPos, width, height }, i}
  <Window {id} {faviconUrl} {title} zPos={i} {xPos} {yPos} {width} {height}>
    <svelte:component this={content}/>
  </Window>
{/each}
