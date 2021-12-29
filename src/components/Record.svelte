<script lang="ts">
  import FoodRow from "./FoodRow.svelte";
  import Day from "./Day.svelte";
  import type { Food } from "../types/food";

  export let created_at: number;
  export let foods: Food[];
</script>

<div class="w-full flex flex-row">
  <div class="m-4 w-2/12">
    <Day {created_at} />
  </div>
  <div
    class="border-t border-r border-b border-l border-grey-light rounded-b rounded-t p-4 flex flex-col leading-normal w-full sm:w-7/12 sm:text-red-600"
  >
    <div class="my-4">
      {#each foods as food}
        <FoodRow name={food.name} amount={food.amount} unit={food.unit} />
      {/each}
    </div>
  </div>
</div>
