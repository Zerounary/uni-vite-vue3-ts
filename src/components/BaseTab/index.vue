<template>
  <view class="flex space-x-2 text-word-1 text-m font-bold mt-2 pt-2 tabs">
    <template v-for="(tab, index) in tabs">
      <view class="flex-1 flex-col-center-center" :class="{'text-aux-6 active': isActive(tab.name)}" @click="onClick(tab, index)">
        <view class="name text-center">{{tab.name}}</view>
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

const onClick = (e, index) => {
  emit('change', e, index)
}
</script>

<style scoped lang="scss">
.active {
  .name {
    @apply text-aux-6 ;
  }
}
.name {
  color: #2C2C2B;
}

</style>