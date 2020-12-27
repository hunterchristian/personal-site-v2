<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleShutdownButtonClick() {
    dispatch("shutdownButtonClick");
  }

  export let style;

  function handleStartMenuClick(e: MouseEvent) {
    e.stopPropagation();
  }
</script>

<style>
  .start-menu {
    position: absolute;
    background-color: #0c8dea;
    width: 380px;
    height: 550px;
    left: 0%;
    bottom: 100%;
    z-index: -50;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 2px 6px 10px #333, -2px 0px 5px rgba(20, 20, 20, 0.6) inset,
      2px 0px 3px #7fbce8 inset;
    overflow: hidden;
  }
  .start-menu .start-menu-header {
    display: flex;
    align-items: center;
    height: 65px;
    box-shadow: 3px 2px 3px #7fbce8 inset;
    background: linear-gradient(to bottom, #245edb 0%, #0c8dea 100%);
    padding: 8px 0px 7px 8px;
  }

  .start-menu .start-menu-header .account-image-wrapper {
    border-radius: 5px;
    height: 50px;
    display: inline-block;
    box-shadow: 2px 2px 4px #333;
  }
  .start-menu .start-menu-header .account-name {
    display: inline-block;
    margin: 0;
    color: white;
    font-size: 18px;
    font-weight: normal;
    margin-left: 10px;
    text-shadow: 0px 0px 3px #555;
  }
  .start-menu .start-menu-body {
    position: relative;
    display: flex;
    height: calc(100% - 65px - 43px);
    background-color: white;
    border: 1px solid #0c8dea;
    margin: 0 1px;
    overflow: hidden;
  }
  .start-menu .start-menu-body::before {
    content: "";
    position: absolute;
    top: -7.5px;
    left: 10%;
    width: 80%;
    height: 5px;
    border-radius: 50%;
    box-shadow: 0px 4px 5px #e88f0b;
    z-index: 10;
  }
  .start-menu .start-menu-body .start-menu-item {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 11px;

    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .start-menu .start-menu-body .start-menu-item > * {
    display: inline-block;
  }

  .start-menu .start-menu-body .start-menu-item .icon {
    height: 30px;
    width: 30px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .start-menu .start-menu-body .start-menu-item .label {
    margin-left: 5px;
    cursor: pointer;
  }

  .start-menu .start-menu-body .start-menu-item .label .intent {
    font-weight: bold;
    color: #373738;
  }

  .start-menu .start-menu-body .start-menu-item .label .program {
    color: gray;
  }

  .start-menu .start-menu-body .start-menu-item:hover {
    background-color: #3d64bd;
    color: white;
  }

  .start-menu .start-menu-body .start-menu-item:hover .label {
    color: white;
  }
  .start-menu .start-menu-body .divider {
    margin: 5px 0px;
    height: 1px;
    background: linear-gradient(to right, white 0%, #d3d3c8 50%, white 100%)
      center/cover no-repeat;
  }

  .start-menu .start-menu-body .start-menu-favorites {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    padding: 8px;
  }

  .start-menu
    .start-menu-body
    .start-menu-favorites
    .start-menu-item.intent-item
    .label
    .intent {
    font-weight: bold;
    color: #373738;
  }

  .start-menu
    .start-menu-body
    .start-menu-favorites
    .start-menu-item.intent-item
    .label
    .program {
    color: gray;
  }

  .start-menu
    .start-menu-body
    .start-menu-favorites
    .start-menu-item.intent-item:hover
    .label
    .intent,
  .start-menu
    .start-menu-body
    .start-menu-favorites
    .start-menu-item.intent-item:hover
    .label
    .program {
    color: inherit;
  }

  .start-menu
    .start-menu-body
    .start-menu-favorites
    .start-menu-item.favorite-item
    .label {
    color: #373738;
  }

  .start-menu
    .start-menu-body
    .start-menu-favorites
    .start-menu-item.favorite-item:hover
    .label {
    color: white;
  }

  .start-menu .start-menu-body .start-menu-favorites .all-programs {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0px 8px 8px 8px;
  }

  .start-menu
    .start-menu-body
    .start-menu-favorites
    .all-programs
    .start-menu-item.all-programs-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: bold;
    color: #373738;
    padding: 5px 0px;
  }

  .start-menu
    .start-menu-body
    .start-menu-favorites
    .all-programs
    .start-menu-item.all-programs-button::after {
    content: "";
    background: url("https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/246.ico")
      center/contain no-repeat;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  .start-menu
    .start-menu-body
    .start-menu-favorites
    .all-programs
    .start-menu-item.all-programs-button:hover {
    color: white;
  }

  .start-menu .start-menu-body .start-menu-shortcuts {
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    padding: 8px;
    background: #d3e5fa;
    border-left: 1px solid #95bdee;
  }

  .start-menu .start-menu-body .start-menu-shortcuts .start-menu-item .icon {
    width: 25px;
    height: 25px;
  }

  .start-menu .start-menu-body .start-menu-shortcuts .start-menu-item .label {
    color: #29356c;
    font-size: 10px;
  }

  .start-menu
    .start-menu-body
    .start-menu-shortcuts
    .start-menu-item:hover
    .label {
    color: white;
  }

  .start-menu
    .start-menu-body
    .start-menu-shortcuts
    .start-menu-item.my-item
    .label {
    font-weight: bold;
  }

  .start-menu
    .start-menu-body
    .start-menu-shortcuts
    .start-menu-item.my-item:hover
    .label {
    color: white;
  }

  .start-menu .start-menu-body .start-menu-shortcuts .divider {
    background: linear-gradient(
        to right,
        transparent 0%,
        #aebad6 50%,
        transparent 100%
      )
      center/cover no-repeat;
  }
  .start-menu .start-menu-footer {
    height: 43px;
    background: linear-gradient(to top, #245edb 0%, #0c8dea 100%);
    box-shadow: -2px -2px 5px rgba(20, 20, 20, 0.6) inset;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    color: white;
  }
  .shutdown-button {
    cursor: pointer;
    margin-right: 5px;
    opacity: 0.75;
  }
  .shutdown-button:hover {
    opacity: 0.9;
  }
  .shutdown-button:active {
    opacity: 0.3;
  }
  .shutdown-text {
    cursor: pointer;
  }
  .shutdown-text:hover {
    text-decoration: underline;
  }
  #start-menu-active {
    display: none;
  }
  #start-menu-active:checked ~ .start-button {
    box-shadow: 0px 0px 15px #333 inset;
  }
  #start-menu-active:checked ~ .start-menu {
    display: block;
  }

  .container {
    padding: 5vh;
    height: 100%;
    text-align: center;
    line-height: 90vh;
  }
  .container .screen {
    width: 120vh;
    height: 90vh;
    box-shadow: 3px 3px 15px #000;
    border-radius: 3px;
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

  .start-menu-item:hover,
  .start-menu-item .icon:hover,
  .start-menu-item .intent:hover,
  .start-menu-item .program:hover {
    cursor: pointer;
  }
</style>

<div class="start-menu" {style} on:click={handleStartMenuClick}>
  <div class="start-menu-header">
    <div class="account-image-wrapper">
      <img src="/images/0.jpeg" alt="avatar" width="50" height="50" />
    </div>
    <h1 class="account-name">Hunter Hodnett</h1>
  </div>
  <div class="start-menu-body">
    <div class="start-menu-favorites">
      <div class="start-menu-item intent-item">
        <div
          class="icon"
          style="background-image:url('/images/ie6-logo.png')" />
        <div class="label">
          <div class="intent">Internet</div>
          <div class="program">Internet Explorer</div>
        </div>
      </div>
      <div class="start-menu-item intent-item">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/email.png')" />
        <div class="label">
          <div class="intent">E-mail</div>
          <div class="program">Outlook Express</div>
        </div>
      </div>
      <div class="divider" />
      <a
        class="start-menu-item favorite-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/hunterchristian/knowledge-bubbles/blob/master/inbox.md">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/notepadicon.png')" />
        <div class="label">Notepad</div>
      </a>
      <a
        class="all-programs link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/hunterchristian?tab=repositories">
        <div class="divider" />
        <div class="start-menu-item all-programs-button">All Programs</div>
      </a>
    </div>
    <div class="start-menu-shortcuts">
      <a
        class="start-menu-item my-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://blog.hunterhodnett.dev/">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/235.ico')" />
        <div class="label">My Documents</div>
      </a>
      <a
        class="start-menu-item my-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://blog.hunterhodnett.dev/">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/21.ico')" />
        <div class="label">My Recent Documents</div>
      </a>
      <a
        class="start-menu-item my-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/hunterhod">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/236.ico')" />
        <div class="label">My Pictures</div>
      </a>
      <a
        class="start-menu-item my-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://open.spotify.com/playlist/5bz6YDElV1p4B3MTwSKdea?si=pudOhXTYRFagLpMGCK1RRw">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/237.ico')" />
        <div class="label">My Music</div>
      </a>
      <a
        class="start-menu-item my-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://pcpartpicker.com/list/947dyf">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/16.ico')" />
        <div class="label">My Computer</div>
      </a>
      <a
        class="start-menu-item my-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/hunterhodnett/">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/18.ico')" />
        <div class="label">My Network Places</div>
      </a>

      <div class="divider" />

      <a
        class="start-menu-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://simpleanalytics.com/hunterhodnett.dev">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/22.ico')" />
        <div class="label">Control Panel</div>
      </a>
      <a
        class="start-menu-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/watch?v=ejQycd4frgM&ab_channel=vipergod2000">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/138.ico')" />
        <div class="label">Printers and Faxes</div>
      </a>

      <div class="divider" />

      <a
        class="start-menu-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.betterhelp.com/">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/24.ico')" />
        <div class="label">Help and Support</div>
      </a>
      <a
        class="start-menu-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="http://letmegooglethat.com/?q=Hunter+Hodnett">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/23.ico')" />
        <div class="label">Search</div>
      </a>
      <a
        class="start-menu-item link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/watch?v=WJq4jWSQNd8&ab_channel=CynicalOwl">
        <div
          class="icon"
          style="background-image:url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/25.ico')" />
        <div class="label">Run...</div>
      </a>
    </div>
  </div>
  <div class="start-menu-footer">
    <img
      on:click={handleShutdownButtonClick}
      class="shutdown-button"
      src="/images/shutdown.png"
      alt="shutdown button"
      width="30px"
      height="30px" />
    <div on:click={handleShutdownButtonClick} class="shutdown-text">
      Turn Off Computer
    </div>
  </div>
</div>
