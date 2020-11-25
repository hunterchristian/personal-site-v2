<script lang="ts">
  import { fade } from "svelte/transition";
  import isMobile from "./util/isMobile";
</script>

<style>
  #shutdown-screen {
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
  .video {
    background-color: rgb(13, 98, 169);
  }
</style>

<div id="shutdown-screen" transition:fade>
  {#if !isMobile()}
    <video
      class="video"
      height={window.innerHeight}
      autoplay
      muted
      loop
      transition:fade={{ delay: 1000 }}>
      <source
        src="https://storage.googleapis.com/hchodnett-content-hosting/restart.mp4"
        type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  {/if}
</div>
