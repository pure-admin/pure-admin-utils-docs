<template>
  <p>{{ `${dateFormat("YYYY/MM/DD HH:mm")} ${getCurrentWeek()} ${uuid()}` }}</p>
</template>

<script>
import { dateFormat, getCurrentWeek, uuid } from '@pureadmin/utils'

export default {
  name: 'App',
  data() {
    return {
      uuid,
      dateFormat,
      getCurrentWeek,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
