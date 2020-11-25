<script lang="ts">
  import { fade } from 'svelte/transition';
  import Avatar from './Avatar.svelte';
</script>

<style>
  .loading-screen {
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
  .logo {
    width: 220px;
    margin: 50px auto;
    position: relative;
  }
  .logo p {
    margin: 0;
    padding: 0;
  }
  .xp {
    position: absolute;
  }
  .top {
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
  }
  .top:after {
    content: '\00a9';
    font-size: 10px;
    position: relative;
    top: -5px;
    margin-left: 2px;
  }
  .mid {
    font-size: 46px;
    font-weight: 700;
    line-height: 36px;
  }
  .mid span {
    font-size: 22px;
    display: inline-block;
    vertical-align: top;
    color: #ff6821;
    margin-top: -8px;
  }
  .logo .bottom {
    font-size: 30px;
    font-weight: 300;
    line-height: 30px;
    margin-left: 5px;
  }
  .progress-bar {
    width: 150px;
    height: 10px;
    border: 2px solid #b2b2b2;
    border-radius: 7px;
    margin: 0 auto;
    padding: 2px 1px;
    overflow: hidden;
    font-size: 0;
  }
  @keyframes loader {
    0% {
      transform: translate(-30px);
    }
    100% {
      transform: translate(150px);
    }
  }
  .box {
    width: 9px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #2838c7 0%,
      #5979ef 17%,
      #869ef3 32%,
      #869ef3 45%,
      #5979ef 59%,
      #2838c7 100%
    );
    display: inline-block;
    margin-right: 2px;
    animation: loader 2s infinite;
    animation-timing-function: linear;
  }
</style>

<div class="loading-screen" transition:fade>
  <div class="container">
    <div class="logo">
      <p class="top">Hunter</p>
      <Avatar />
      <p class="mid">Hodnett<span class="xp">XP</span></p>
      <p class="bottom">Portfolio</p>
    </div>
    <div class="progress-bar">
      <div class="box" />
      <div class="box" />
      <div class="box" />
    </div>
  </div>
</div>
