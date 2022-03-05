<script lang="ts">
  import { link, push } from "svelte-spa-router";
  import { records } from "../store/record";
  import RepositoryFactory, { RECORDS } from "../repositories/factory";
  import FoodRow from "../components/FoodRow.svelte";
  import InputFood from "../components/organisms/InputFood.svelte";
  import type { Record } from "../types/record";
  import type { Food } from "../types/food";
  const RecordsRepository = RepositoryFactory[RECORDS];
  let foods: Food[] = new Array();

  let id: number;
  let name: string;
  let amount: number;
  let unit: string;
  let hasfoods: boolean = false;

  function addFood(event) {
    id = event.detail.id;
    name = event.detail.name;
    amount = event.detail.amount;
    unit = event.detail.unit;
    if (name == null || amount == null || unit == null) {
      return;
    }
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
    hasfoods = hasFoods();
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

  function hasFoods(): boolean {
    return foods.length > 0;
  }
</script>

<div class="p-1 flex flex-col w-full sm:w-7/12 items-start">
  <div class="p-4 flex flex-col leading-normal">
    <InputFood {name} {amount} {unit} on:addInputFood={addFood} />
    <div class="p-1 flex flex-col w-full sm:w-7/12">
      <div class="my-4">
        {#each foods as food, i}
          <FoodRow name={food.name} amount={food.amount} unit={food.unit} />
        {/each}
      </div>
    </div>
    <div class="p-1 flex flex-col">
      <div class="p-1 flex flex-row justify-between">
        <a class="w-4/12" href={`/`} use:link> キャンセル </a>
        <button
          class="w-4/12 rounded-3xl shadow"
          on:click={saveClick}
          disabled={!hasfoods}>Save</button
        >
      </div>
    </div>
  </div>
</div>
