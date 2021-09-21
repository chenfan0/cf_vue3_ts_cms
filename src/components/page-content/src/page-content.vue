<template>
  <div class="page-content">
    <CFTable :list-data="dataList" v-bind="tableContentConfig">
      <template #header>
        <div class="header">
          <div class="title">用户列表</div>
          <el-button type="primary" size="medium">创建用户</el-button>
        </div>
      </template>

      <template #enable="scope">
        <el-button size="mini" :type="scope.row.enable === 1 ? 'success' : 'danger'">{{
          scope.row.enable === 1 ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <strong>{{ $filter.format(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filter.format(scope.row.createAt) }}</strong>
      </template>
      <template #operation>
        <el-button size="mini" icon="el-icon-edit" type="text">编辑</el-button>
        <el-button size="mini" icon="el-icon-delete" type="text">删除</el-button>
      </template>
    </CFTable>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import { useStore } from 'vuex'

import { IRootStateType } from '@/store/type'
import { ITableContentConfig } from '@/components/page-content'

import CFTable from '@/base-ui/table'

const props = defineProps({
  tableContentConfig: {
    type: Object as PropType<ITableContentConfig>,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const store = useStore<IRootStateType>()
// 发送获取列表数据的网络请求
store.dispatch('system/getPageListAction', {
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const dataList: any = computed(() => (store.state.system as any)[props.pageName + 'List'])
</script>

<style lang="less" scoped>
.page-content {
  .header {
    display: flex;
    justify-content: space-between;
    margin: 10px 10px;

    .title {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
