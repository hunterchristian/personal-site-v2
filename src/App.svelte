<script lang="ts">
  import Icon from './Icon.svelte';

  function handleDragDrop(e) {
    e.preventDefault();
  }
</script>

<div class="container">
  <div class="screen" on:drop={handleDragDrop} ondragover="return false">
    <Icon
      href="#"
      iconDesc="Follow me"
      imageUrl="../images/twitter-logo.png"
      startingX='2vh'
      startingY='80vh'
    /> 
    <div class="taskbar">
      <div class="main-section">
        <input id="start-menu-active" type="checkbox" checked />
        <label class="start-button" for="start-menu-active">
          start
        </label>
          <div class="start-menu-footer"></div>
      </div>
      <div class="quick-section"></div>
    </div>
  </div>
</div>

<style>
	.screen {
  position: relative;
  background: url('../images/bliss.png') center/cover no-repeat #0c8dea;
}

/* Start menu  */
.screen .taskbar {
  position: absolute;
  display: flex;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
}
.screen .taskbar .main-section {
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
.screen .taskbar .main-section .start-button {
  position: relative;
  display: inline-block;
  font-size: 18px;
  color: white;
  font-style: italic;
  padding: 5px 25px 5px 15px;
  text-shadow: 1px 1px 1px #333;
  border-radius: 0px 10px 15px 0px;
  border: none;
  transform: skewX(-3deg);
  left: -5px;
  box-shadow: 0px 5px 10px #79ce71 inset;
  background: radial-gradient(circle, #5eac56 0%, #3c873c 100%) center/cover
    no-repeat;
}
.screen .taskbar .main-section .start-button::before {
  content: '';
  /* background: url('http://opi.wiki/pic?w=6&f=108883&e=2&o=703') center/cover
    no-repeat; */
  position: relative;
  display: inline-block;
  height: 15px;
  width: 15px;
  top: 1px;
  transform: skewX(3deg);
  -webkit-filter: drop-shadow(1px 1px 1px #333);
}
.screen .taskbar .main-section .start-menu {
  display: none;
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
.screen .taskbar .main-section .start-menu .start-menu-header {
  display: flex;
  align-items: center;
  height: 65px;
  box-shadow: 3px 2px 3px #7fbce8 inset;
  background: linear-gradient(to bottom, #245edb 0%, #0c8dea 100%);
  padding: 8px 0px 7px 8px;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-header
  .account-image-wrapper {
  background-color: white;
  border-radius: 5px;
  padding: 2px;
  height: 52px;
  display: inline-block;
  box-shadow: 2px 2px 4px #333;
}
.screen .taskbar .main-section .start-menu .start-menu-header .account-name {
  display: inline-block;
  margin: 0;
  color: white;
  font-size: 18px;
  font-weight: normal;
  margin-left: 10px;
  text-shadow: 0px 0px 3px #555;
}
.screen .taskbar .main-section .start-menu .start-menu-body {
  position: relative;
  display: flex;
  height: calc(100% - 65px - 43px);
  background-color: white;
  border: 1px solid #0c8dea;
  margin: 0 1px;
  overflow: hidden;
}
.screen .taskbar .main-section .start-menu .start-menu-body::before {
  content: '';
  position: absolute;
  top: -7.5px;
  left: 10%;
  width: 80%;
  height: 5px;
  border-radius: 50%;
  box-shadow: 0px 4px 5px #e88f0b;
  z-index: 10;
}
.screen .taskbar .main-section .start-menu .start-menu-body .start-menu-item {
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 11px;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-item
  > * {
  display: inline-block;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-item
  .icon {
  height: 30px;
  width: 30px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-item
  .label {
  margin-left: 5px;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-item
  .label
  .intent {
  font-weight: bold;
  color: #373738;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-item
  .label
  .program {
  color: gray;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-item:hover {
  background-color: #3d64bd;
  color: white;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-item:hover
  .label {
  color: white;
}
.screen .taskbar .main-section .start-menu .start-menu-body .divider {
  margin: 5px 0px;
  height: 1px;
  background: linear-gradient(to right, white 0%, #d3d3c8 50%, white 100%)
    center/cover no-repeat;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding: 8px;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .start-menu-item.intent-item
  .label
  .intent {
  font-weight: bold;
  color: #373738;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .start-menu-item.intent-item
  .label
  .program {
  color: gray;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .start-menu-item.intent-item:hover
  .label
  .intent,
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .start-menu-item.intent-item:hover
  .label
  .program {
  color: inherit;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .start-menu-item.favorite-item
  .label {
  color: #373738;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .start-menu-item.favorite-item:hover
  .label {
  color: white;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .all-programs {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0px 8px 8px 8px;
}
.screen
  .taskbar
  .main-section
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
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .all-programs
  .start-menu-item.all-programs-button::after {
  content: '';
  background: url('https://dl.dropboxusercontent.com/u/19745853/Win%20XP%20icons/246.ico')
    center/contain no-repeat;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 5px;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-favorites
  .all-programs
  .start-menu-item.all-programs-button:hover {
  color: white;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-shortcuts {
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding: 8px;
  background: #d3e5fa;
  border-left: 1px solid #95bdee;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-shortcuts
  .start-menu-item
  .icon {
  width: 25px;
  height: 25px;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-shortcuts
  .start-menu-item
  .label {
  color: #29356c;
  font-size: 10px;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-shortcuts
  .start-menu-item:hover
  .label {
  color: white;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-shortcuts
  .start-menu-item.my-item
  .label {
  font-weight: bold;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-shortcuts
  .start-menu-item.my-item:hover
  .label {
  color: white;
}
.screen
  .taskbar
  .main-section
  .start-menu
  .start-menu-body
  .start-menu-shortcuts
  .divider {
  background: linear-gradient(
      to right,
      transparent 0%,
      #aebad6 50%,
      transparent 100%
    )
    center/cover no-repeat;
}
.screen .taskbar .main-section .start-menu .start-menu-footer {
  height: 43px;
  background: linear-gradient(to top, #245edb 0%, #0c8dea 100%);
  box-shadow: -2px -2px 5px rgba(20, 20, 20, 0.6) inset;
}
.screen .taskbar .main-section #start-menu-active {
  display: none;
}
.screen .taskbar .main-section #start-menu-active:checked ~ .start-button {
  box-shadow: 0px 0px 15px #333 inset;
}
.screen .taskbar .main-section #start-menu-active:checked ~ .start-menu {
  display: block;
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