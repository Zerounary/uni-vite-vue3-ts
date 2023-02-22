<template>
  <view>
    <van-uploader
      multiple
      :file-list="fileList"
      :max-count="3"
      @after-read="uploaderBeforeRead"
      @delete="uploaderDelete"
    >
    <slot></slot>
    </van-uploader>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { usePersonStore } from '@/stores/person';

const { VITE_BASE_URL } = import.meta.env
const emits = defineEmits(['change'])

let fileList = ref([] as any)
let fileUrls = ref([] as any)

let personStore = usePersonStore()
const uploaderBeforeRead = (event: any) => {
  event.detail.file.forEach((item: any) => {
    uni.uploadFile({
      filePath: item.url,
      name: 'file',
      url: VITE_BASE_URL + '/api/common/upload',
      formData: {
        token: personStore.token || '',
      },
      success: (res) => {
        let data = JSON.parse(res.data)
        fileUrls.value.push(data.data.url)
        fileList.value = [...fileList.value, item]
        emits('change',fileUrls.value)
      },
    })
  })
}
const uploaderDelete = (event: any) => {
  fileList.value.splice(event.detail.index, 1)
  fileList = [...fileList.value]
  fileUrls.value.splice(event.detail.index, 1)
  emits('change',fileUrls.value)
}

const getFileUrl = () => {
  console.log('🚀 ~ file: index.vue:50 ~ getFileUrl ~ fileUrls.value', fileUrls.value)
  return fileUrls.value
}

defineExpose({
  getFileUrl,
})
</script>
<style></style>
