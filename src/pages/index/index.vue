<template>
  <view class="flex flex-col items-center justify-center">
    <image class="h-200rpx w-200rpx mt-200rpx mb-50rpx mx-auto" src="/static/logo.png" />
    <view class="flex justify-center mb-50rpx">
      <text class=" text-36rpx text-hex-8f8f94">{{ title }}</text>
    </view>
    <button @click="onClick">{{counter.count}}</button>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model:show="show" @click-overlay="onClickOverlay" >
      <view class="w-300rpx h-300rpx bg-white flex items-center justify-center">
        <view>内容</view>
      </view>
    </van-popup>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';
import { version } from "~/package.json"
const counter = useCounterStore();
const title = ref('Hello')

console.log(`version = '${version}'`)
console.log(`import.meta.env`, import.meta.env)

const onClick = () => {
  counter.increment();
}

const show = ref(false);

const onClickOverlay = (e: any) => {
  show.value = false;
}
const showPopup = () => {
  show.value = true;
};

</script>

<style></style>
