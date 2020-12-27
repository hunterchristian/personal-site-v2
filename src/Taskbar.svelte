<script lang="ts">
  import StartMenu from "./StartMenu.svelte";

  let showStartMenu = false;
  function handleStartButtonClick(e: MouseEvent) {
    e.stopPropagation();
    showStartMenu = !showStartMenu;
  }

  document.onclick = function () {
    showStartMenu = false;
  };

  function getAMPM() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes().toString();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = parseInt(minutes, 10) < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  let currentTime = getAMPM();
  const ONE_MINUTE_MILLIS = 60 * 1000;
  setInterval(() => (currentTime = getAMPM()), ONE_MINUTE_MILLIS);
</script>

<style>
  .start-button-image {
    cursor: pointer;
    width: 97px;
    height: 30px;
    background-image: url("/images/start-inactive.png");
  }
  .start-button-image:hover {
    background-image: url("/images/start-hover.png");
  }
  .start-button-image:active {
    background-image: url("/images/start-active.png");
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
    display: flex;
    align-items: center;
    position: relative;
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

  .clock {
    position: absolute;
    right: 0;
    padding: 10px;
    color: white;
    font-family: ClassicDesktop;
    text-transform: uppercase;
    font-size: larger;
  }
</style>

<div class="taskbar">
  <div class="main-section">
    <div class="start-button-image" on:click={handleStartButtonClick} />
    <div class="start-menu-footer" />
    <StartMenu
      on:shutdownButtonClick
      style={`display: ${showStartMenu ? 'block' : 'none'};`} />
    <div class="clock">{currentTime}</div>
  </div>
</div>
