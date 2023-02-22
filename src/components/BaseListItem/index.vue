<template>
  <view class="mt-2">
    <view class="flex space-x-2 tracking-wider">
      <view class="w-180rpx h-180rpx bg-gray-500">
        <BaseImage :src="data.img" />
      </view>
      <view>
        <view class="font-bold">{{data.title}}</view>
        <view class="my-1">
          <template v-for="t in data.tags">
            <van-tag class="mr-1" type="primary">{{t}}</van-tag>
          </template>
        </view>
        <view class="sub-props">活动时间：{{data.date}}</view>
        <view class="sub-props">剩余报名人数：{{data.num}}</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        tags: []
      }
    }
  }
})

</script>

<style scoped>
.sub-props {
  @apply text-gray-500 text-sm;
}
</style>