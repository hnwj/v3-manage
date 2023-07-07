<template>app</template>

<script>
import { getListAPI } from '@/api'
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      const { data: res } = await getListAPI()
      console.log('res')
    })
  }

}
</script>
<style lang="less">
</style>
