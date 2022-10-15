<script lang="ts">
  import { buildUUID, getCurrentWeek } from "@pureadmin/utils";
</script>

<main>
  <p>
    {getCurrentWeek()} {buildUUID()}
  </p>
</main>
