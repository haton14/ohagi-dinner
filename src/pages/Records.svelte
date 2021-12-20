<script lang="ts">
  import { each } from "svelte/internal";

  import Record from "../components/Record.svelte";
  import YearMonth from "../components/YearMonth.svelte";
  import RepositoryFactory, { RECORDS } from "../repositories/factory";

  const RecordsRepository = RepositoryFactory[RECORDS];
  const response = RecordsRepository.get();
</script>

<div>
  {#await response then records}
    {#each records.years as yearRecord}
      {#each yearRecord.months as monthRecord}
        <YearMonth year={yearRecord.year} month={monthRecord.month} />
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {#each monthRecord.days as dayRecord}
            <Record
              year={yearRecord.year}
              month={monthRecord.month}
              day={dayRecord.day}
              foods={dayRecord.record.foods}
            />
          {/each}
        </div>
      {/each}
    {/each}
  {/await}
</div>
