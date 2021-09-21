<template>
  <div class="cf-table">
    <slot name="header">
      <h2>{{ title }}</h2>
    </slot>
    <el-table :data="listData" border style="width: 100%" align="center">
      <el-table-column v-if="showSelection" type="selection" align="center"></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>
      <template v-for="item in propList" :key="item.id">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.prop" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="footer">
      <el-pagination class="pagination" layout="prev, pager, next" :total="1000"></el-pagination>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array as any,
    required: true
  },
  showIndex: {
    type: Boolean,
    default: false
  },
  showSelection: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="less" scoped>
.cf-table {
  border-top: 20px solid #f5f5f5;
  padding: 40px 20px 30px 20px;

  .pagination {
    margin-top: 30px;
    text-align: right;
  }
}
</style>
