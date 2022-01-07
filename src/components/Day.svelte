<script lang="ts">
  import dayjs from "dayjs";
  import { weekdaysShort as weekdays } from "dayjs/locale/ja";

  export let created_at: number;

  let displayDay = dayjs.unix(created_at);
</script>

<div class="p-2 justify-center">
  <p class="text-xs text-gray-700">{weekdays[displayDay.day()]}</p>
  <p class="text-xl">{displayDay.date()}</p>
  <p class="text-xs text-gray-400"> {displayDay.hour()}:{displayDay.minute()}</p>
</div>
