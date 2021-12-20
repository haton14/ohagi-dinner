<script lang="ts">
  import Record from "../components/Record.svelte";
</script>

<div>
  <h1>Top</h1>
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
    <Record year={2021} month={12} day={1} />
    <Record year={2021} month={12} day={2} />
    <Record year={2021} month={12} day={3} />
    <Record year={2021} month={12} day={4} />
  </div>
</div>
