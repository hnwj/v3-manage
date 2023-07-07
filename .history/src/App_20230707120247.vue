<template>app</template>

<script>
import { getListAPI } from '@/api'
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(async () => {
      const { data: res } = await getListAPI()
      console.log('res', res)
    })
  }

}
</script>
<style lang="less">
</style>
