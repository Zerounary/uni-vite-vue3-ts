<template>
  <view>
    <view class="flex items-center justify-between">
      <view> {{ title }}</view>
      <view class="text-gray-500" @click="to">更多</view>
    </view>
    <view>
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { $goto } from '@/utils/navigate'

const props = defineProps({
  title: String,
  more: String,
})

const to = () => {
  let url = props.more || ''
  if (!url) {
    return
  }
  $goto(
    {
      url,
    },
    true
  )
}
</script>

<style scoped></style>
