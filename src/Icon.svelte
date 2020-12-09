<script lang="ts">
  export let href: string;
  export let imageUrl: string;
  export let iconDesc: string;

  function handleClick(event: Event) {
    event.preventDefault();
  }
</script>

<a href={href} on:click={handleClick}>
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 75px;
    height: 75px;
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