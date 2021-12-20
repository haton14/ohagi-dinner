<script lang="ts">
  import FoodRow from "./FoodRow.svelte";
  import Day from "./Day.svelte";

  export let year: number;
  export let month: number;
  export let day: number;
</script>

<div class="w-full flex flex-row">
  <div class="m-4 w-auto">
    <Day {year} {month} {day} />
  </div>
  <div
    class="border-t border-r border-b border-l border-grey-light rounded-b rounded-t p-4 flex flex-col leading-normal w-12 sm:w-5/12 sm:text-red-600 lg:w-7/12 lg:text-green-600"
  >
    <div class="my-4">
      <FoodRow name={"ミルワーム"} amount={10} unit={"匹"} />
      <FoodRow name={"ペレット"} amount={10} unit={"個"} />
    </div>
  </div>
</div>
