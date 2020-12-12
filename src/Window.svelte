<script lang="ts">
  export let xPos = 500;
  export let yPos = 300;
  export let zPos = 5;
</script>

<style>
  .window {
    position: fixed;
  }
</style>

<div
  class="window"
  style={`width: 300px;top: ${yPos}px;left: ${xPos}px;z-index: ${zPos};`}>
  <div class="title-bar">
    <div class="title-bar-text">A Window With Stuff In It</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize" />
      <button aria-label="Maximize" />
      <button aria-label="Close" />
    </div>
  </div>
  <div class="window-body">
    <p>There's so much room for activities!</p>
  </div>
</div>
