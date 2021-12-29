<script lang="ts">
  import dayjs from "dayjs";
  export let before_created_at: number;
  export let after_created_at: number;

  let beforeDay = dayjs.unix(before_created_at);
  let afterDay = dayjs.unix(after_created_at);
  let isDisplay: boolean =
    beforeDay.year() != afterDay.year() ||
    beforeDay.month() != afterDay.month();
</script>

{#if isDisplay}
  <h1 class="w-full">{afterDay.year()}年{afterDay.month() + 1}月</h1>
{/if}
