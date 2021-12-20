<script lang="ts">
  export let name: string;
  export let amount: number;
  export let unit: string;
</script>

<div class="p-2 flex flex-row justify-between">
  <p>{name}</p>
  <p>{amount}{unit}</p>
</div>
