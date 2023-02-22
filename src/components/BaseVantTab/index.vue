<template>
  <view class="flex space-x-2 text-word-1 text-lg font-bold mt-2">
    <template v-for="tab in tabs">
      <view class="flex-1" :class="{'text-aux-6': isActive(tab.name)}" @click="onClick(tab)">
        <view class="text-center">{{tab.name}}</view>
        <view class="mt-2 w-full block">
          <view class="rounded h-7rpx max-w-8 mx-auto" :class="{'bg-aux-6': isActive(tab.name)}"></view>
        </view>
      </view>
    </template>
    <view></view>
  </view>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
const props = defineProps({
  tabs: Array,
  active: String
})
const emit = defineEmits(['change']);

let isActive = computed(() => {
  return (tag: string) => tag == props.active;
})

const onClick = (e) => {
  emit('change', e)
}
</script>

<style scoped>

</style>