<script lang="ts">
  import Tailwindcss from "./Tailwindcss.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "./router";
</script>

<Tailwindcss />
<main>
  <div class="container mx-auto px-6 my-4">
    <Router {routes} />
  </div>
</main>
