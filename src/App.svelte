<script lang="ts">
  import { empty, fromEvent, timer } from "rxjs";
  import { debounce } from "rxjs/operators";
  import "xp.css/dist/XP.css";
  import {
    ENABLE_RANDOM_ERROR,
    ERROR_CHANCE_PERCENT,
    SHOW_LOADING_SCREEN,
  } from "./appConfig";
  import BlueScreenError from "./BlueScreenError.svelte";
  import BrowserIcon from "./BrowserIcon.svelte";
  import LinkIcon from "./LinkIcon.svelte";
  import LoadingScreen from "./LoadingScreen.svelte";
  import ScreenSaver from "./ScreenSaver.svelte";
  import ShutdownScreen from "./ShutdownScreen.svelte";
  import Taskbar from "./Taskbar.svelte";
  import isMobile from "./util/isMobile";
  import Windows from "./Windows.svelte";

  function handleDragDrop(e) {
    e.preventDefault();
  }
  function shouldShowBlueScreenError() {
    return Math.random() * 100 <= ERROR_CHANCE_PERCENT;
  }

  let loading = SHOW_LOADING_SCREEN;
  setTimeout(() => (loading = false), 3000);

  let showScreenSaver = false;
  // Screen saver doesn't work on mobile
  if (!isMobile()) {
    const mouseMoveStream = fromEvent(document, "mousemove").pipe(
      debounce((e) => (showScreenSaver ? empty() : timer(30000)))
    );
    mouseMoveStream.subscribe(() => {
      showScreenSaver = !showScreenSaver;
    });
    // Start the stream
    document.dispatchEvent(new Event("mousemove"));
  }

  let showBlueScreenError = false;
  const intervalId = setInterval(() => {
    let showError = shouldShowBlueScreenError();
    if (showError && !loading && !showScreenSaver && ENABLE_RANDOM_ERROR) {
      showBlueScreenError = true;
      clearInterval(intervalId);
    }
  }, 5000);

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  let showShutdownScreen = false;
  function handleShutdownButtonClick() {
    showShutdownScreen = true;
    toggleFullScreen();
  }
</script>

<style>
  .screen {
    position: relative;
    background: url("../images/bliss.png") center/cover no-repeat #0c8dea;
  }

  .container {
    height: 100%;
    text-align: center;
  }
  .container .screen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }

  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-user-select: none;
    cursor: default;
  }

  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: verdana;
  }
</style>

{#if loading}
  <LoadingScreen />
{/if}
{#if showBlueScreenError}
  <BlueScreenError />
{/if}
{#if showScreenSaver && !showBlueScreenError}
  <ScreenSaver />
{/if}
{#if showShutdownScreen}
  <ShutdownScreen />
{/if}
<div class="container">
  <div class="screen" on:drop={handleDragDrop} ondragover="return false">
    <LinkIcon
      href="https://github.com/hunterchristian/personal-site-v2"
      iconDesc="Source Code"
      imageUrl="../images/github-logo.png"
      startingX="2vh"
      startingY="5vh" />
    <LinkIcon
      href="https://www.youtube.com/channel/UCWelrUFMwotAxD_ia3Wk1LA"
      iconDesc="Watch me"
      imageUrl="../images/youtube-logo.webp"
      startingX="2vh"
      startingY="60vh" />
    <LinkIcon
      href="https://blog.hunterhodnett.dev/"
      iconDesc="Read me"
      imageUrl="../images/0.jpeg"
      startingX="2vh"
      startingY="70vh" />
    <LinkIcon
      disableBorder={true}
      href="https://twitter.com/HunterHodnett"
      iconDesc="Follow me"
      imageUrl="../images/twitter-logo.png"
      startingX="2vh"
      startingY="80vh" />
    <BrowserIcon startingX="calc(90vw - 40px)" startingY="55vh" />
    <Windows />
    <Taskbar on:shutdownButtonClick={handleShutdownButtonClick} />
  </div>
</div>
