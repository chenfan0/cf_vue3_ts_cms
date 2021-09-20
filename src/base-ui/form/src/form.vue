<template>
  <div class="cf-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-form-item :label="item.label" :style="itemStyle">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :showpassword="item.type === 'password'"
                >
                </el-input>
              </el-form-item>
            </template>

            <template v-else-if="item.type === 'select'">
              <el-form-item :label="item.label" :style="itemStyle">
                <el-select style="width: 100%" :placeholder="item.placeholder">
                  <template v-for="iten in item.options" :key="iten.label">
                    <el-option v-bind="iten"></el-option>
                  </template>
                </el-select>
              </el-form-item>
            </template>

            <template v-else-if="item.type === 'datePicker'">
              <el-form-item :label="item.label" :style="itemStyle">
                <el-date-picker type="daterange" style="width: 100%" v-bind="item.otherOptions">
                </el-date-picker>
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'

import { IFormItemDataType } from '../type'

defineProps({
  formItems: {
    type: Array as PropType<IFormItemDataType[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '80px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 30px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xs: 24,
      sm: 24,
      md: 12,
      lg: 8,
      xl: 8
    })
  }
})
</script>

<style lang="less" scoped>
.cf-form {
  padding-top: 20px;
}
</style>
