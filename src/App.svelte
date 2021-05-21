<script lang="ts">
  import { empty, fromEvent, timer } from 'rxjs';
  import { debounce } from 'rxjs/operators';
  import 'xp.css/dist/XP.css';
  import {
    ENABLE_RANDOM_ERROR,
    ERROR_CHANCE_PERCENT,
    SHOW_LOADING_SCREEN,
  } from './appConfig';
  import BlueScreenError from './BlueScreenError.svelte';
  import BrowserIcon from './BrowserIcon.svelte';
  import LinkIcon from './LinkIcon.svelte';
  import LoadingScreen from './LoadingScreen.svelte';
  import ScreenSaver from './ScreenSaver.svelte';
  import ShutdownScreen from './ShutdownScreen.svelte';
  import Taskbar from './Taskbar.svelte';
  import isMobile from './util/isMobile';
  import Windows from './Windows.svelte';

  let wWidth = '40vw';
  let rWidth = '50vw';
  let aWidth = '60vw';
  if (isMobile()) {
    wWidth = '5vw';
    rWidth = '35vw';
    aWidth = '65vw';
  }
  function handleDragDrop(e) {
    e.preventDefault();
  }
  function shouldShowBlueScreenError() {
    return Math.random() * 100 <= ERROR_CHANCE_PERCENT;
  }

  let loading = SHOW_LOADING_SCREEN;
  setTimeout(() => (loading = false), 1500);

  let showScreenSaver = false;
  // Screen saver doesn't work on mobile
  if (!isMobile()) {
    const mouseMoveStream = fromEvent(document, 'mousemove').pipe(
      debounce((e) => (showScreenSaver ? empty() : timer(30000)))
    );
    mouseMoveStream.subscribe(() => {
      showScreenSaver = !showScreenSaver;
    });
    // Start the stream
    document.dispatchEvent(new Event('mousemove'));
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
  }

  const youtubeIconHeight = isMobile() ? '45vh' : '40vh';
  const blogIconHeight = isMobile() ? '60vh' : '50vh';
  const twitterIconHeight = isMobile() ? '75vh' : '60vh';
</script>

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
      startingY="5vh"
    />
    <LinkIcon
      href="https://www.youtube.com/channel/UCWelrUFMwotAxD_ia3Wk1LA"
      iconDesc="Watch me"
      imageUrl="../images/youtube-logo.webp"
      startingX="2vh"
      startingY={youtubeIconHeight}
    />
    <LinkIcon
      href="https://blog.hunterhodnett.dev/"
      iconDesc="Read me"
      imageUrl="../images/0.jpeg"
      startingX="2vh"
      startingY={blogIconHeight}
    />
    <LinkIcon
      href="https://shopwherewithal.com/pages/sizeset-builder"
      iconDesc="Wherewithal SizeSets"
      imageUrl="../images/logo_Icon_favicon_w-favicon.png"
      startingX={wWidth}
      startingY="25vh"
      style={{
        background: 'black',
      }}
    />
    <LinkIcon
      href="https://www.reddit.com/submit"
      iconDesc="Reddit Create-A-Post"
      imageUrl="../images/reddit.svg"
      startingX={rWidth}
      startingY="25vh"
      style={{
        background: 'black',
      }}
    />
    <LinkIcon
      href="https://music.amazon.com/artists/B077V1WN59/orville-peck"
      iconDesc="Amazon Music Artist Experience"
      imageUrl="../images/amu.png"
      startingX={aWidth}
      startingY="25vh"
      style={{
        background: 'black',
      }}
    />
    <LinkIcon
      disableBorder={true}
      href="https://twitter.com/HunterHodnett"
      iconDesc="Follow me"
      imageUrl="../images/twitter-logo.png"
      startingX="2vh"
      startingY={twitterIconHeight}
    />
    <BrowserIcon startingX="calc(80vw - 40px)" startingY="55vh" />
    <Windows />
    <Taskbar on:shutdownButtonClick={handleShutdownButtonClick} />
  </div>
</div>

<style>
  .screen {
    position: relative;
    background: url('../images/bliss.png') center/cover no-repeat #0c8dea;
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
