<template>
  <view class="flex flex-col items-center justify-center">
    <image
      class="h-200rpx w-200rpx mt-200rpx mb-50rpx mx-auto"
      src="/static/logo.png"
    />
    <view class="flex justify-center mb-50rpx">
      <text class="text-36rpx text-hex-8f8f94">{{ title }}</text>
    </view>
    <button @click="onClick">{{ counter.count }}</button>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model:show="show" @click-overlay="onClickOverlay">
      <view class="w-300rpx h-300rpx bg-white flex items-center justify-center">
        <view>内容</view>
      </view>
    </van-popup>
    <uni-data-picker :localdata='[{text:"一年级",value:"1-0",children:[{text:"1.1班",value:"1-1"},{text:"1.2班",value:"1-2"}]},{text:"二年级",value:"2-0"},{text:"三年级",value:"3-0"}]' ></uni-data-picker>
    <view class="mt-1 flex">
      <view>iconfont 示例：</view>
      <view class="iconfont icon-bofang_huaban text-red-500"></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useApiStore } from '@/stores/api'
import { usePersonStore } from '@/stores/person'

import { version } from '~/package.json'
const counter = useCounterStore()
const person = usePersonStore()
const api = useApiStore()
const title = ref('Hello')

console.log(`version = '${version}'`)
console.log(`import.meta.env`, import.meta.env)

const onClick = () => {
  counter.increment()
  api.login()
}

const show = ref(false)

const onClickOverlay = (e: any) => {
  show.value = false
}
const showPopup = () => {
  show.value = true
}
</script>

<style lang="scss" scoped></style>
