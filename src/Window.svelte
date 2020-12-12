<script lang="ts">
  export let xPos = 200;
  export let yPos = 100;
  export let zPos = 1;
  export let width = 800;
  export let height = 600;

  let dragging = false;
  function handleDragStart(e: DragEvent) {
    // Remove the ghost image
    const img = new Image();
    img.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    e.dataTransfer.setDragImage(img, 0, 0);
  }

  let prevX;
  let prevY;
  function handleDrag(e: DragEvent) {
    if (prevX && prevY) {
      xPos += e.pageX - prevX;
      yPos += e.pageY - prevY;
    }

    prevX = e.pageX;
    prevY = e.pageY;
  }
</script>

<style>
  .window {
    position: fixed;
  }
</style>

<div
  on:dragstart={handleDragStart}
  on:drag={handleDrag}
  draggable="true"
  class="window"
  style={`width: ${width}px;height: ${height}px;top: ${yPos}px;left: ${xPos}px;z-index: ${zPos};cursor: ${dragging ? 'grabbing' : 'grab'}`}>
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
