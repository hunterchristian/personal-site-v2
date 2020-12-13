<script lang="ts">
  export let title = '';
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
  function handleDragEnd(e: DragEvent) {
    prevX = undefined;
    prevY = undefined;
  }

  let prevXPos;
  let prevYPos;
  let prevWidth;
  let prevHeight;
  let shouldMaximise = true;
  function maximiseWindow() {
    prevXPos = xPos;
    prevYPos = yPos;
    prevWidth = width;
    prevHeight = height;
    xPos = 0;
    yPos = 0;
    width = window.innerWidth;
    height =
      window.innerHeight -
      document.getElementsByClassName('taskbar')[0].clientHeight;
    shouldMaximise = false;
  }
  function resetWindow() {
    xPos = prevXPos;
    yPos = prevYPos;
    width = prevWidth;
    height = prevHeight;
    shouldMaximise = true;
  }
  function handleMaximize() {
    if (shouldMaximise) {
      maximiseWindow();
    } else {
      resetWindow();
    }
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
  on:dragend={handleDragEnd}
  draggable="true"
  class="window"
  style={`width: ${width}px;height: ${height}px;top: ${yPos}px;left: ${xPos}px;z-index: ${zPos};`}>
  <div class="title-bar" style={`cursor: ${dragging ? 'grabbing' : 'grab'};`}>
    <div class="title-bar-text">{title}</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize" />
      <button aria-label="Maximize" on:click={handleMaximize} />
      <button aria-label="Close" />
    </div>
  </div>
  <div class="window-body">
    <slot />
  </div>
</div>
