<script lang="ts">
  import OpenUrl from './commands/OpenUrl';
  import Icon from './Icon.svelte';

  export let href: string;
  export let imageUrl: string;
  export let iconDesc: string;
  export let startingX: string;
  export let startingY: string;
  export let disableBorder = false;
  export let style: any;

  function handleLinkIconAction() {
    new OpenUrl().execute({ url: href });
  }
</script>

<Icon
  action={handleLinkIconAction}
  {disableBorder}
  {iconDesc}
  {imageUrl}
  {startingX}
  {startingY}
  {style}
/>
