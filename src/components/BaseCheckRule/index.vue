<template>
  <view class="page-treaty flex-center-center">
    <view class="view-treaty flex-start-center">
      <checkbox class="weui-check" :checked="checked" @click="handleCheck" />
      已知晓<text class="text" @click="handleClick">隐私协议</text>并授权该表单收集我的信息
    </view>
    <van-popup
      :show="showPopup"
      round
      position="bottom"
      class="pop"
      :style="{ height: '80%' }"
    >
      <view class="content">
        <text>
          {{ content }}
        </text>
        <view class=" mt-3 space-y-3">
          <template v-for="btn in btnsList" :key="btn">
            <button @click="handleClickDo(btn)">{{btn}}</button>
          </template>
        </view>
      </view>
    </van-popup>
  </view>
</template>
<script>
import { useBaseConfigStore } from '@/stores/baseConfig'
export default {
  name: 'BaseTreaty',
  props: {
    isArrgeen: {
      type: Boolean,
      default: false,
    },
    showPopup: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      checked: false,
      isShowPopup: false,
      btnsList: ['同意', '取消'],
      // content: `用户协议及个人隐私条款
      //           1、尊重与保护用户个人信息是本服务的一项基本原则。
      //           2、本应用需采集用户的个人信息包括:手机号码、身份证号码、居住地址信息、途径疫情风险区行程信息、随行人员信息、个人天府健康通健康码、通信大数据行程卡、精确位置信息。
      //           3、用户同意本应用基于以下事项使用用户的个人信息:
      //           (1)读取、上传、记录用户个人信息数据并进行同步、分享和储存以实现部分服务功能;
      //           (2)收集用户个人信息数据并统计、分析及研究，便于精准排查高风险返乡人群，确保疫情排查到位、辖区和谐稳定。
      //           (3)依本协议约定，本应用管理、审查用户个人信息并进行处理;
      //           (4)执行本应用的升级服务、验证服务;
      //           (5)改进或提高用户的使用安全性和服务性:
      //           (6)向用户发送本应用的重要通知和服务信息:
      //           (7)适用法律法规规定的其他事项。
      //           除上述事项外，如未取得用户事先同意，本应用不会将用户个人信息使用于任何其他用途。
      //           4、本应用将采取技术措施和其他必要措施，确保用户个人信息安全，防止在本服务中收集的用户个人信息泄露、毁损或丢失。
      //           5、本应用承诺未经用户同意不向任何第三方公开、透露用户个人信息，但法律法规规定或有权机关的指示提供用户的个人信息除外。`,
    }
  },
  watch: {
    isArrgeen: {
      immediate: true,
      deep: true,
      handler (v) {
        this.checked = v
      },
    },
  },
  computed: {
    content() {
      let baseConfig = useBaseConfigStore();
      return baseConfig.config?.user_agreement || '无'
    }
  },
  methods: {
    handleClick () {
      console.log('click');
      this.$emit('update:showPopup', true)
    },
    handleCheck () {
      this.checked = !this.checked
      this.$emit('update:isArrgeen', this.checked)
    },
    handleClickDo (item) {
      this.$emit('click', item)
    },
  },
}
</script>
<style lang="scss" scoped>
.page-treaty {
  width: 100%;
  padding-top: 30rpx;
  .text {
    text-decoration: underline;
    padding: 0 5rpx;
  }
  .content {
    padding: 30rpx;
  }
}
</style>
