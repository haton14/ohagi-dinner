<script lang="ts">
  import { Diamonds } from "svelte-loading-spinners";
  import { records } from "../store/record";
  import Record from "../components/Record.svelte";
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
    return a.created_at < b.created_at ? 1 : -1;
  });

  $: sortedRecords = $records.sort(
    (record1, record2) => record2.created_at - record1.created_at
  );
</script>

<div class="pb-16">
  {#if sortedRecords.length > 0}
    {#each sortedRecords as record, i}
      {#if i === 0}
        <YearMonth before_created_at={0} after_created_at={record.created_at} />
      {:else}
        <YearMonth
          before_created_at={$records[i - 1].created_at}
          after_created_at={record.created_at}
        />
      {/if}
      <Record created_at={record.created_at} foods={record.foods} />
    {/each}
  {:else}
    <div class="flex justify-center">
      <Diamonds size="60" color="#e5931f" unit="px" duration="5s" />
    </div>
  {/if}
  <div class="bg-gray-100 w-full h-10 fixed bottom-0 left-0 text-center shadow">
    <a
      class="bg-gray-100 rounded-3xl w-6 h-6 shadow-md text-center fixed bottom-7"
      href={`/new`}
      use:link>＋</a
    >
  </div>
</div>
