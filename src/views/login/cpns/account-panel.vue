<template>
  <div class="account-panel">
    <el-form :model="account">
      <el-form-item label="账号" prop="name" :rules="rules.name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="rules.password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// 存储表单收集的数据
const account = ref({
  name: '',
  password: ''
})
// 设置验证规则
const rules = {
  name: [
    {
      required: true,
      message: '用户名必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: '用户名必须是3到10个字符或数字',
      tirgger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必须输入',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: '密码必须是3到10个字符或数字',
      tirgger: 'blur'
    }
  ]
}
</script>

<style lang="less" scoped></style>
