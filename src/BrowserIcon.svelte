<script lang="ts">
  import Icon from './Icon.svelte';
  import Browser from './Browser.svelte';
  import CreateNewWindow from './commands/CreateNewWindow';

  export let href: string;
  export let imageUrl: string;
  export let iconDesc: string;
  export let startingX: string;
  export let startingY: string;
  export let disableBorder = false;

  function handleBrowserIconAction() {
    new CreateNewWindow().execute({
      faviconUrl: '/images/ie6-logo.png',
      title: 'Internet Explorer',
      content: Browser,
      width: 900,
      height: 700
    });
  }
</script>

<Icon
  action={handleBrowserIconAction}
  href="https://web.archive.org/web/20011201082439/http://www.google.com/"
  {disableBorder}
  iconDesc="Internet Explorer"
  imageUrl="/images/ie6-logo.png"
  {startingX}
  {startingY} />