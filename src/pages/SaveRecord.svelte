<script lang="ts">
  import { link, push } from "svelte-spa-router";
  import { records } from "../store/record";
  import RepositoryFactory, { RECORDS } from "../repositories/factory";
  import FoodRow from "../components/FoodRow.svelte";
  import type { Record } from "../types/record";
  import type { Food } from "../types/food";
  const RecordsRepository = RepositoryFactory[RECORDS];
  let formCount: number = 1;
  let foods: Food[] = new Array();

  let id: number;
  let name: string;
  let amount: number;
  let unit: string;

  function addFood() {
    let foodAdd: Food = {
      id: id,
      name: name,
      amount: amount,
      unit: unit,
      last_updated_at: null,
    };
    foods = [...foods, foodAdd];
    id = null;
    name = null;
    amount = null;
    unit = null;
  }

  const save = async () => {
    let record: Record = {
      id: null,
      foods: foods,
      created_at: 1111,
      last_updated_at: null,
    };
    const response = await RecordsRepository.create(record);
    records.add([response]);
    push("/");
  };

  function saveClick() {
    save();
  }
</script>

<div
  class="p-1 flex flex-col w-full sm:w-7/12"
>
  <div class="p-4 flex flex-col leading-normal">
    <div class="p-2 flex flex-row justify-between">
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
    <div
    class="p-1 flex flex-col w-full sm:w-7/12"
  >
    <div class="my-4">
      {#each foods as food, i}
        <FoodRow name={food.name} amount={food.amount} unit={food.unit} />
      {/each}
    </div>
</div>
  </div>
</div>
  <button on:click={addFood}>Add</button>

  <button on:click={saveClick}>Save</button>

  <a href={`/`} use:link> back </a>

