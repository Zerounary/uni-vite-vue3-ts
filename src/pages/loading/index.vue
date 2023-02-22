<template>
  <van-loading class="loading g-absolute-center" size="24px"
    >加载中...</van-loading
  >
</template>

<script>
import { $goto } from '../../utils/navigate'
export default {
  name: 'PageLoading',
  data() {
    return {}
  },
  computed: {},
  onLoad(option) {
    const { path } = option
    $goto({
      url: decodeURIComponent(path),
    })
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
