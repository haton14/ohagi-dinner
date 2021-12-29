<script lang="ts">
  import { link, push } from "svelte-spa-router";
  import { records } from "../store/record";
  import RepositoryFactory, { RECORDS } from "../repositories/factory";
  import type { Record } from "../types/record";
  import type { Food } from "../types/food";
  const RecordsRepository = RepositoryFactory[RECORDS];
  let formCount: number = 1;
  let foods: Food[] = new Array();

  let food: Food = {
    name: null,
    amount: null,
    unit: null,
  };
  foods.push(food);

  function addForm() {
    let foodAdd: Food = {
      name: "",
      amount: 0,
      unit: "",
    };
    foods.push(foodAdd);
    formCount += 1;
  }

  const save = async () => {
    let record: Record = {
      foods: foods,
      created_at: 1111,
    };
    const response = await RecordsRepository.create(record);
    records.add([response]);
    push("/");
  };

  function saveClick() {
    save();
  }
</script>

<div>
  {#each Array(formCount) as _, i}
    <div class="p-4 flex flex-col leading-normal">
      <div class="p-2 flex flex-row justify-between">
        <input
          class="w-10/12"
          bind:value={foods[i].name}
          type="text"
          placeholder="フード"
          required
        />
        <input
          class="w-3/12"
          bind:value={foods[i].amount}
          type="number"
          inputmode="decimal"
          placeholder="量"
          required
        />
        <input
          class="w-3/12"
          bind:value={foods[i].unit}
          type="text"
          placeholder="単位"
          required
        />
      </div>
    </div>
  {/each}
  <button on:click={addForm}>Add</button>

  <button on:click={saveClick}>Save</button>

  <a href={`/`} use:link> back </a>
</div>
