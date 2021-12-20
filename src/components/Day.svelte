<script lang="ts">
  import dayjs from "dayjs";
  import { weekdaysShort as weekdays } from "dayjs/locale/ja";
  
  export let year: number;
  export let month: number;
  export let day: number;

  let weekday: string = weekdays[dayjs(`${year}-${month}-${day}`).day()];
</script>

<div class="p-2 justify-between">
  <p>{weekday}</p>
  <p>{day}</p>
</div>
