<script lang="ts">
  import { windows } from './stores/windows';
  import Window from './Window.svelte';
</script>

{#each $windows as { id, title, content, xPos, yPos, width, height }, i}
  <Window {id} {title} zPos={i} {xPos} {yPos} {width} {height}>
    {@html content}
  </Window>
{/each}
