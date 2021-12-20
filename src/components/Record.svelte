<script>
  import FoodRow from "./FoodRow.svelte";
  import Day from "./Day.svelte";
</script>

<div class="w-full flex flex-row">
  <div class="m-4 w-auto">
    <Day year=2021 month=12 day=2/>
  </div>
  <div
    class="border-t border-r border-b border-l border-grey-light rounded-b rounded-t p-4 flex flex-col leading-normal w-12 sm:w-5/12 sm:text-red-600 lg:w-7/12 lg:text-green-600"
  >
    <div class="my-4">
      <FoodRow />
      <FoodRow />
    </div>
  </div>
</div>
