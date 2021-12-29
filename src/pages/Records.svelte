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
  $records.sort(function (a, b) {
    return a.created_at < b.created_at ? 1 : -1; //オブジェクトの昇順ソート
  });

  $: sortedRecords = $records.sort(
    (record1, record2) => record2.created_at - record1.created_at
  );
</script>

<div>
  {#each sortedRecords as record, i}
    {#if i === 0}
      <YearMonth before_created_at={0} after_created_at={record.created_at} />
    {:else}
      <YearMonth
        before_created_at={$records[i - 1].created_at}
        after_created_at={record.created_at}
      />
    {/if}
    <RecordCom created_at={record.created_at} foods={record.foods} />
  {/each}

  <a href={`/new`} use:link> + </a>
</div>
