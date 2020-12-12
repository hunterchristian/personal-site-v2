<script lang="ts">
  import Windows from './Windows.svelte';
</script>

<style>
  .start-button-image {
    cursor: pointer;
    width: 97px;
    height: 30px;
    background-image: url('/images/start-inactive.png');
  }
  .start-button-image:hover {
    background-image: url('/images/start-hover.png');
  }
  .start-button-image:active {
    background-image: url('/images/start-active.png');
  }
  /* Start menu  */
  .taskbar {
    position: absolute;
    display: flex;
    z-index: 101;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .taskbar .main-section {
    height: 100%;
    flex-grow: 1;
    background: linear-gradient(
        to bottom,
        #245edb 0%,
        #3f8cf3 9%,
        #245edb 18%,
        #245edb 92%,
        #333 100%
      )
      center/cover no-repeat;
  }
</style>

<div class="taskbar">
  <div class="main-section">
    <div class="start-button-image" />
    <div class="start-menu-footer" />
    <Windows />
  </div>
  <div class="quick-section" />
</div>
