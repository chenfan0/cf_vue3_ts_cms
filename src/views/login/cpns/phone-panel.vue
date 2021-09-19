<template>
  <div class="phone-panel">
    <el-form :model="phone">
      <el-form-item label="手机号" prop="name" :rules="rules.num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="password" :rules="rules.varify">
        <div class="varify-content">
          <el-input v-model="phone.varify" show-password />
          <el-button class="varify-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const phone = ref({
  num: '',
  varify: ''
})
const rules = {
  num: [
    {
      required: true,
      message: '手机号码必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
      message: '手机号码格式不对',
      tirgger: 'blur'
    }
  ],
  varify: [
    {
      required: true,
      message: '验证码必须输入',
      trigger: 'blur'
    }
  ]
}
</script>

<style lang="less" scoped>
.phone-panel {
  .varify-content {
    display: flex;
    .varify-btn {
      margin-left: 8px;
    }
  }
}
</style>
