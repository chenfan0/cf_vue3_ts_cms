<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建" width="30%" center destroy-on-close>
      <span>
        <CFForm v-bind="modalConfig" v-model="modalData" />
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineExpose } from 'vue'

import CFForm from '@/base-ui/form'

defineProps({
  modalConfig: {
    type: Object,
    required: true
  }
})

const dialogVisible = ref(false)
const modalData: any = ref({})

defineExpose({
  dialogVisible,
  modalData
})
</script>

<style lang="less" scoped></style>
