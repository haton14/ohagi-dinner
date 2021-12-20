<script lang="ts">
  import { each } from "svelte/internal";

  import Record from "../components/Record.svelte";
  import YearMonth from "../components/YearMonth.svelte";
  import { RecordsRepository } from "../repositories/records";

  const records = new RecordsRepository().get();
</script>

<div>
  {#each records.years as yearRecord}
    {#each yearRecord.months as monthRecord}
      <YearMonth year={yearRecord.year} month={monthRecord.month} />
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {#each monthRecord.days as dayRecord}
          <Record
            year={yearRecord.year}
            month={monthRecord.month}
            day={dayRecord.day}
          />
        {/each}
      </div>
    {/each}
  {/each}
</div>
