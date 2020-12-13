<script lang="ts">
  import { windows } from './stores/windows';
  import Window from './Window.svelte';
</script>

{#each $windows as { title, content, xPos, yPos, width, height }, i}
  <Window {title} zPos={i} {xPos} {yPos} {width} {height}>
    {@html content}
  </Window>
{/each}
