<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function pushButton(event) {
    dispatch("pushButton", event);
  }
</script>

<button class="rounded-3xl w-6 h-6 shadow leading-3" on:click={pushButton}
  >＋</button
>
