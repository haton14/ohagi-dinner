<script lang="ts">
  import { records } from "../store/record";
  import RecordCom from "../components/Record.svelte";
  import { link } from "svelte-spa-router";
  import YearMonth from "../components/YearMonth.svelte";
  import RepositoryFactory, { RECORDS } from "../repositories/factory";

  const RecordsRepository = RepositoryFactory[RECORDS];
  const get = async () => {
    const response = await RecordsRepository.get();
    records.add(response.records);
  };
  if ($records.length < 1) {
    get();
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
