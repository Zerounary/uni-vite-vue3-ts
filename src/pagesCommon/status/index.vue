<template>
    <view class=" h-screen w-screen flex justify-center pt-300rpx">
        <view class="text-center">
            <view>
                <van-icon class="text-300rpx" :class="style.class"  :name="style.icon" />
            </view>
            <view class="mt-3 tracking-wider">{{ style.text }}</view>
            <view class="mt-3 text-gray-500 tracking-wider text-sm">{{ second }} 秒后自动返回</view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

let style = ref({
    icon: 'close',
    class: 'text-red-500',
    text: '未知状态类型'
});

let second = ref(3);

let typeMap = {
    'passed': {
        icon: 'passed',
        class: 'text-hex-288500',
        text: '恭喜你，提交成功 !'
    },
    'wait': {
        icon: 'clock-o',
        class: 'text-hex-ff6c37',
        text: '审核等待中，请稍后重试 !'
    }
};
let timer = setInterval(() => {
    second.value = second.value - 1;
    if (second.value < 1) {
        uni.navigateBack();
        clearInterval(timer);
    }
},1000)

onLoad(({status = ''}) => {
    if(typeMap[status]) {
        style.value = {
            icon: typeMap[status].icon,
            text: typeMap[status].text,
            class: typeMap[status].class,
        }
    }
});

</script>

<style scoped>

</style>