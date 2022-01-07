<script lang="ts">
  import FoodRow from "./FoodRow.svelte";
  import Day from "./Day.svelte";
  import type { Food } from "../types/food";

  export let created_at: number;
  export let foods: Food[];
</script>

<div class="w-full flex flex-row p-3">
  <div class="m-5 w-1/12">
    <Day {created_at} />
  </div>
  <div
    class="border-t border-r border-b border-l border-grey-light rounded-b rounded-t p-1 flex flex-col w-full sm:w-7/12"
  >
    <div class="my-4">
      {#each foods as food}
        <FoodRow name={food.name} amount={food.amount} unit={food.unit} />
      {/each}
    </div>
  </div>
</div>
