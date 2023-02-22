<template>
  <swiper
    class="swiper"
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :circular="circular"
    :vertical="vertical"
    :interval="interval"
    :duration="duration"
  >
    <template v-for="(item, i) in swiperList" :key="i">
      <swiper-item class="swiper-item" @click="isClick ? $emit('click', swiperList, i) : ''">
        <BaseImage :src="handleAssetsUrl(item.image)" class="img" />
      </swiper-item>
    </template>
  </swiper>
</template>
<script>
import { assetsUrl } from '@/utils'
export default {
  name: 'BaseSwiper',
  props: {
    swiperList: {
      type: Array,
      default: () => [],
    },
    indicatorDots: {
      type: Boolean,
      default: true,
    },
    isBanner: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    circular: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 5000,
    },
    duration: {
      type: Number,
      default: 500,
    },
    isClick: {
      type: Boolean,
      default: true,
    },
    // 是否开启点击预览
    hasPreview: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      baseURL: process.env.VUE_APP_baseURL,
    }
  },
  methods: {
    handleAssetsUrl (url) {
      return assetsUrl(url, true)
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  background-color: #ccc;
  height: 360rpx;
  overflow: hidden;
}
</style>
