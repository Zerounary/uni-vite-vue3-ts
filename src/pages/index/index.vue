<template>
  <view class="flex flex-col items-center justify-center">
    <image class="h-200rpx w-200rpx mt-200rpx mb-50rpx mx-auto" src="/static/logo.png" />
    <view class="flex justify-center mb-50rpx">
      <text class=" text-36rpx text-hex-8f8f94">{{ title }}</text>
    </view>
    <button @click="onClick">{{counter.count}}</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';
import { version } from "~/package.json"
const counter = useCounterStore();
const title = ref('Hello')

console.log(`version = '${version}'`)

const onClick = () => {
  counter.increment();
}

</script>

<style></style>
