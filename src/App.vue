<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { usePersonStore } from './stores/person'
import { useConfigStore } from './stores/config'

onLaunch(() => {
  const personStore = usePersonStore()
  personStore.handleLogin().then(() => {
    let configStore = useConfigStore()
    configStore.fetch_config()
  })
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style></style>
