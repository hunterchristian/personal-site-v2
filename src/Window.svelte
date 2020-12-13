<script lang="ts">
  import BringWindowToTop from './commands/BringWindowToTop';
  import UpdateWindowPosition from './commands/UpdateWindowPosition';
  import UpdateWindowSize from './commands/UpdateWindowSize';

  export let id;
  export let title = '';
  export let xPos;
  export let yPos;
  export let zPos;
  export let width;
  export let height;

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
    new UpdateWindowPosition().execute({ id, xPos, yPos });
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
    new UpdateWindowPosition().execute({ id, xPos, yPos });
    new UpdateWindowSize().execute({ id, width, height });
  }
  function resetWindow() {
    xPos = prevXPos;
    yPos = prevYPos;
    width = prevWidth;
    height = prevHeight;
    shouldMaximise = true;
    new UpdateWindowPosition().execute({ id, xPos, yPos });
    new UpdateWindowSize().execute({ id, width, height });
  }
  function handleMaximize() {
    if (shouldMaximise) {
      maximiseWindow();
    } else {
      resetWindow();
    }
  }

  function handleTitleBarClick() {
    new BringWindowToTop().execute({ id });
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
  <div
    on:click={handleTitleBarClick}
    class="title-bar"
    style={`cursor: ${dragging ? 'grabbing' : 'grab'};`}>
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
