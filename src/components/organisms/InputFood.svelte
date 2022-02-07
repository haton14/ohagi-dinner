<script lang="ts">
  import AddButton from "../atoms/AddButton.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let name: string;
  export let amount: number;
  export let unit: string;
  function addInputFood() {
    dispatch("addInputFood", { name: name, amount: amount, unit: unit });
  }
</script>

<div class="p-1 flex flex-row justify-between">
  <input
    class="w-10/12"
    bind:value={name}
    type="text"
    placeholder="フード"
    required
  />
  <input
    class="w-3/12"
    bind:value={amount}
    type="number"
    inputmode="decimal"
    placeholder="量"
    required
  />
  <input
    class="w-3/12"
    bind:value={unit}
    type="text"
    placeholder="単位"
    required
  />
</div>

<div class="p-1 flex flex-col w-9 h-9 ml-auto">
  <AddButton on:pushButton={addInputFood} />
</div>
