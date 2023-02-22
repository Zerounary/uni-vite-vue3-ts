<template>
  <button
    class="BaseButton flex-center-center"
    :open-type="openType"
    @click.stop="$emit('click', item)"
  >
   {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    btnText: {
      type: String,
      default: '',
    },
    openType: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.BaseButton {
  border: none;
  border-radius: 30rpx;
  padding: 0 30rpx;
  color: #fff;
  background-color: #6AA839;
  font-size: 24rpx;
}
</style>
