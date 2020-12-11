<script lang="ts">
  import OpenUrl from './commands/OpenUrl';

  export let href: string;
  export let imageUrl: string;
  export let iconDesc: string;
  export let startingX: string;
  export let startingY: string;

  let xPos = startingX;
  let yPos = startingY;
  let width = '5vh';
  let height = '5vh';

  function handleClick(event: Event) {
    event.preventDefault();
  }

  function handleDblClick() {
    new OpenUrl().execute({ url: 'https://twitter.com/HunterHodnett' });
  }

  function handleDragStart(e: DragEvent) {
    e.dataTransfer.dropEffect = 'move';
  }

  function handleDragEnd(e: DragEvent) {
    xPos = `calc(${e.pageX}px - ${width} - 5px)`;
    yPos = `${e.pageY}px`;
  }
</script>

<style>
  @font-face {
    font-family: 'ClassicDesktop';
    src: url('/fonts/ClassicDesktop.ttf');
  }
  .icon-desc {
    padding: 1px;
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
  }
  a:hover {
    cursor: pointer;
    text-decoration: none;
  }
  a:focus .icon-desc {
    background: steelblue;
  }
</style>

<a
  {href}
  on:click={handleClick}
  on:dblclick={handleDblClick}
  on:dragstart={handleDragStart}
  on:dragend={handleDragEnd}
  style="top:{yPos};left:{xPos};width:${width};height:${height}">
  <img src={imageUrl} alt={iconDesc} />
  <span class="icon-desc">{iconDesc}</span>
</a>
