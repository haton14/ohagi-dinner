<script lang="ts">
  import { each } from "svelte/internal";

  import RecordCom from "../components/Record.svelte";
  import YearMonth from "../components/YearMonth.svelte";
  import RepositoryFactory, { RECORDS } from "../repositories/factory";
  import type { Record } from "../types/record";

  const RecordsRepository = RepositoryFactory[RECORDS];
  const response = RecordsRepository.get();

  function addClick() {
    let record: Record = {
      foods: [
        {
          id: 1,
          name: "ミルワーム",
          amount: 1,
          unit: "匹",
        },
        {
          id: 2,
          name: "ペレット",
          amount: 10,
          unit: "個",
        },
      ],
      created_at: 1111,
    };
    RecordsRepository.create(record);
  }
</script>

<div>
  {#await response then records}
    <!--<YearMonth year={yearRecord.year} month={monthRecord.month} />-->
    <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {#each records.records as record}
        <RecordCom created_at={record.created_at} foods={record.foods} />
      {/each}
    </div>
  {/await}
  <button on:click={addClick}>Add</button>
</div>
