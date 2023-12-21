<script setup lang="ts">
import { useGlobal } from "@pureadmin/utils"

const { $echarts } = useGlobal<GlobalPropertiesApi>()

console.log('$echarts', $echarts)
</script>