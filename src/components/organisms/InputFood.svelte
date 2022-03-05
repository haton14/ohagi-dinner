<script lang="ts">
  import AddButton from "../atoms/AddButton.svelte";
  import type { Food } from "../../types/food";
  import RepositoryFactory, { FOODS } from "../../repositories/factory";
  import { createEventDispatcher } from "svelte";

  export let name: string;
  export let amount: number;
  export let unit: string;

  let suggestionFoods: Food[] = new Array();
  let suggestionFoodsUniqueName: Food[] = new Array();
  let units: string[] = new Array();

  const FoodsRepository = RepositoryFactory[FOODS];
  const get = async () => {
    const response = await FoodsRepository.get();
    suggestionFoods = response.foods;
    suggestionFoodsUniqueName = uniqueName(suggestionFoods);
  };
  get();

  const dispatch = createEventDispatcher();

  function uniqueName(foods: Food[]): Food[] {
    const names = foods.map(function (foods) {
      return foods.name;
    });
    return foods.filter(function (food, index) {
      return names.indexOf(food.name) === index;
    });
  }

  function findByNameUnit(name: string, unit: string): number {
    console.log(name, unit);
    console.log(suggestionFoods.length);
    const ff = suggestionFoods.filter(function (food) {
      console.log(food.name, food.unit);
      return food.name === name && food.unit === unit;
    });
    console.log(ff);
    if (ff.length === 0) {
      return null;
    }
    return ff[0].id;
  }

  function addInputFood() {
    const id = findByNameUnit(name, unit);
    dispatch("addInputFood", {
      id: id,
      name: name,
      amount: amount,
      unit: unit,
    });
  }
</script>

<div class="p-1 flex flex-row justify-between">
  <input
    class="w-10/12"
    bind:value={name}
    type="text"
    placeholder="フード"
    required
    list="food_name"
    on:input={function () {
      const f = suggestionFoods.filter(function (food) {
        return food.name === name;
      });
      units = f.map(function (f) {
        return f.unit;
      });
    }}
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
    list="food_unit"
  />
</div>

<datalist id="food_name">
  {#each suggestionFoodsUniqueName as food, i}
    <option>{food.name}</option>
  {/each}
</datalist>

<datalist id="food_unit">
  {#each units as unit, i}
    <option>{unit}</option>
  {/each}
</datalist>

<div class="p-1 flex flex-col w-9 h-9 ml-auto">
  <AddButton on:pushButton={addInputFood} />
</div>
