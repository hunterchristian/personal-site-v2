<script lang="ts">
  import 'xp.css/dist/XP.css';
  import {
    ENABLE_RANDOM_ERROR,
    ERROR_CHANCE_PERCENT,
    SHOW_LOADING_SCREEN,
  } from './appConfig';
  import BlueScreenError from './BlueScreenError.svelte';
  import Icon from './Icon.svelte';
  import LoadingScreen from './LoadingScreen.svelte';
  import Taskbar from './Taskbar.svelte';
  import Windows from './Windows.svelte';

  function handleDragDrop(e) {
    e.preventDefault();
  }
  function shouldShowBlueScreenError() {
    return Math.random() * 100 <= ERROR_CHANCE_PERCENT;
  }

  let loading = SHOW_LOADING_SCREEN;
  setTimeout(() => (loading = false), 3000);

  let showBlueScreenError = false;
  const intervalId = setInterval(() => {
    let showError = shouldShowBlueScreenError();
    if (!loading && showError && ENABLE_RANDOM_ERROR) {
      showBlueScreenError = true;
      clearInterval(intervalId);
    }
  }, 5000);
</script>

<style>
  .screen {
    position: relative;
    background: url('../images/bliss.png') center/cover no-repeat #0c8dea;
  }

  .container {
    height: 100%;
    text-align: center;
    line-height: 90vh;
  }
  .container .screen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    line-height: normal;
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
<div class="container">
  <div class="screen" on:drop={handleDragDrop} ondragover="return false">
    <Icon
      href="#"
      iconDesc="Follow me"
      imageUrl="../images/twitter-logo.png"
      startingX="2vh"
      startingY="80vh" />
    <Windows />
    <Taskbar />
  </div>
</div>
