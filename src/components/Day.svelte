<script lang="ts">
  import dayjs from "dayjs";
  import { weekdaysShort as weekdays } from "dayjs/locale/ja";

  export let created_at: number;

  let displayDay = dayjs.unix(created_at);
</script>

<div class="p-2 justify-center">
  <p>{weekdays[displayDay.day()]}</p>
  <p>{displayDay.date()}</p>
</div>
