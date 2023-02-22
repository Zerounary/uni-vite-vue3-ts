<template>
  <image
    class="base-image"
    :src="realSrc"
    :mode="mode"
    :fade-show="fadeShow"
    @error="handleError"
    @load="handleLoad"
    @click="handleClick"
  />
</template>
<script>
const { VITE_BASE_URL } = import.meta.env
export default {
  name: 'BaseImage',
  props: {
    src: {
      type: [String, Array],
      default: '',
    },
    mode: {
      type: String,
      default: 'aspectFill',
      validator (v) {
        if (v) {
          return ['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'heightFix'].indexOf !== -1
        }
        return true
      },
    },
    // 图片显示动画效果
    fadeShow: {
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
      baseURL: VITE_BASE_URL,
    }
  },
  computed: {
    realSrc ({ src, baseURL }) {
      if (src) {
        const newSrc = Array.isArray(src) ? src[0] : src
        if (newSrc.indexOf('/') === 0) {
          return baseURL + src
        }
        return src
      }
      return undefined
    },
  },
  methods: {
    handleError (e) {
      this.$emit('err', e)
    },
    handleLoad (e) {
      this.$emit('load', e)
    },
    handleClick (e) {
      this.$emit('click')
      if (this.hasPreview) {
        const { realSrc } = this
        uni.previewImage({
          current: 0,
          urls: [realSrc],
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.base-image {
  width: 100%;
  height: 100%;
}
</style>
