<script lang="ts">
  import isMobile from "./util/isMobile";

  export let action: () => void;
  export let imageUrl: string;
  export let iconDesc: string;
  export let startingX: string;
  export let startingY: string;
  export let disableBorder = false;

  let xPos = startingX;
  let yPos = startingY;
  let width = "5vh";
  let height = "5vh";
  let active = false;

  function handleClick(event: Event) {
    event.preventDefault();
    active = true;
    if (isMobile()) {
      action();
    }
  }

  function handleBlur() {
    active = false;
  }

  function handleDblClick() {
    action();
  }

  function handleDragStart(e: DragEvent) {
    e.dataTransfer.dropEffect = "move";
  }

  function handleDragEnd(e: DragEvent) {
    xPos = `calc(${e.pageX}px - ${width} - 5px)`;
    yPos = `${e.pageY}px`;
  }
</script>

<style>
  @font-face {
    font-family: "ClassicDesktop";
    src: url("/fonts/ClassicDesktop.ttf");
  }
  .icon-desc {
    padding: 2px 4px;
    margin-top: 5px;
    color: white;
    text-shadow: 1px 1px 2px black;
    font-family: ClassicDesktop;
    font-size: larger;
  }
  img {
    width: 5vh;
    height: 5vh;
    filter: drop-shadow(1px 1px 2px black);
  }
  a {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70px;
    text-align: center;
  }
  a:hover {
    cursor: pointer;
    text-decoration: none;
  }
  a:focus {
    outline: none;
  }
  a:focus .icon-desc {
    background: steelblue;
  }

  .icon-desc.active {
    background: steelblue;
  }
  /* ----------- iPhone X ----------- */
  /* Portrait and Landscape */
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    img {
      width: 10vh;
      height: 10vh;
    }
    a {
      width: 100px;
    }
    .icon-desc {
      font-size: x-large;
    }
  }
</style>

<a
  href="#"
  on:click={handleClick}
  on:focusout={handleBlur}
  on:dblclick={handleDblClick}
  on:dragstart={handleDragStart}
  on:dragend={handleDragEnd}
  style="top:{yPos};left:{xPos};">
  <img
    src={imageUrl}
    alt={iconDesc}
    style="border-radius: {disableBorder ? 'none' : '50%'};" />
  <span class="icon-desc {active ? 'active' : ''}">{iconDesc}</span>
</a>
