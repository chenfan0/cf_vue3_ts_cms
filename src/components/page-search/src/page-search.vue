<template>
  <div class="page-search">
    <CFForm v-bind="formItems" v-model="formData">
      <template #header>
        <h1 class="header">检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </CFForm>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { formItems } from '../config'

import CFForm from '@/base-ui/form'

const formData = ref({
  id: '',
  userName: '',
  password: '',
  select: '',
  createTime: ''
})
</script>

<style lang="less" scoped>
.page-search {
  .header {
    text-align: center;
  }

  .footer {
    text-align: right;
    padding: 0 50px 20px 0;
  }
}
</style>
