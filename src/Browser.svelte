<script lang="ts">
  let inputUrl = "http://www.google.com";
  let waybackUrl = "savedpages/Google.htm";
  let waybackSearchUrl = "https://web.archive.org/web/*/";

  function handleNavigate() {
    waybackUrl = waybackSearchUrl + inputUrl;
  }
  function handleKeyUp(e: Event) {
    console.log(e.key)
    if (e.key === 'Enter' || e.keyCode === 13) {
        handleNavigate();
    }
  }
</script>

<style>
  .iframe-container {
    background:url('/images/loader.gif') center center no-repeat;
    background-color: white;
    background-size: 50px 50px;
    width: 100%;
    height: 100%;
  }
  .field-row {
    display: flex;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  .field-row input {
    width: 75%;
  }
</style>

<div class="field-row">
  <label for="text21">Search Internet Archive: </label>
  <input on:keyup={handleKeyUp} bind:value={inputUrl} id="text21" type="text" />
  <button class="search-button" on:click={handleNavigate}>Go</button>
</div>
<div class="iframe-container">
  <iframe src={waybackUrl} style="display: block; width: 100%; height: 100%; border: none;" />
</div>