<script lang="ts">
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

  function handleDragStart(e: DragEvent) {
      e.dataTransfer.dropEffect = "move";
  }

  function handleDragEnd(e: DragEvent) {
    xPos = `calc(${e.pageX}px - ${width} - 5px)`;
    yPos = `${e.pageY}px`;
  }
</script>

<a
  href={href}
  on:click={handleClick}
  on:dragstart={handleDragStart}
  on:dragend={handleDragEnd}
  style="top:{yPos};left:{xPos};width:${width};height:${height}"
>
  <img src={imageUrl} alt={iconDesc} />
  <span class='icon-desc'>{iconDesc}</span>
</a>

<style>
  .icon-desc {
    padding: 1px;
  }
  img {
    width: 5vh;
    height: 5vh;
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
    color: white;
    background: steelblue;
  }
  a:focus img {
    filter: grayscale(20%)
  }
</style>