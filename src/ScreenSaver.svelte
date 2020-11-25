<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<style>
  .screen-saver {
    z-index: 200;
    color: white;
    background-color: black;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="screen-saver" transition:fade>
  <video height={window.innerHeight} autoplay muted loop transition:fade="{{delay: 1000}}">
    <source src="https://storage.googleapis.com/hchodnett-content-hosting/screensaver.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>
</div>
