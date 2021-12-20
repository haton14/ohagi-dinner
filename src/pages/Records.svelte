<script lang="ts">
  import Record from "../components/Record.svelte";
  import YearMonth from "../components/YearMonth.svelte";
</script>

<div>
  <YearMonth year={2021} month={12} />
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
    <Record year={2021} month={12} day={1} />
    <Record year={2021} month={12} day={2} />
    <Record year={2021} month={12} day={3} />
    <Record year={2021} month={12} day={4} />
    <Record year={2021} month={12} day={31} />
  </div>
  <YearMonth year={2022} month={1} />
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
    <Record year={2022} month={1} day={1} />
    <Record year={2022} month={1} day={2} />
    <Record year={2022} month={1} day={3} />
    <Record year={2022} month={1} day={4} />
  </div>
</div>
