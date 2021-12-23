<script lang="ts">
  import { each } from "svelte/internal";

  import { records } from "../store/record";
  import RecordCom from "../components/Record.svelte";
  import { link } from "svelte-spa-router";
  import YearMonth from "../components/YearMonth.svelte";
  import RepositoryFactory, { RECORDS } from "../repositories/factory";
  import type { Record } from "../types/record";

  const RecordsRepository = RepositoryFactory[RECORDS];
  const get = async () => {
    const response = await RecordsRepository.get();
    records.add(response.records);
  };
  if ($records.length < 1) {
    get();
  }

  const add = async () => {
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
    const response = await RecordsRepository.create(record);
    records.add([response]);
  };

  function addClick() {
    add();
  }
</script>

<div>
  <!--<YearMonth year={yearRecord.year} month={monthRecord.month} />-->
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
    {#each $records as record}
      <RecordCom created_at={record.created_at} foods={record.foods} />
    {/each}
  </div>
  <a href={`/new`} use:link> + </a>
</div>
