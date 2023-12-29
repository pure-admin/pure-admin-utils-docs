<script lang="ts">
  import { dateFormat, getCurrentWeek, uuid } from '@pureadmin/utils'
</script>

<main>
  <p>{ `${dateFormat("YYYY/MM/DD HH:mm")} ${getCurrentWeek()} ${uuid()}` }</p>
</main>
