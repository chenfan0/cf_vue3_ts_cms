<template>
  <div class="user">
    <PageSearch
      :formSearchConfig="formSearchConfig"
      @resetClick="handleResetClick"
      @searchClick="handleQueryClick"
    />
    <PageContent ref="pageContentRef" :tableContentConfig="tableContentConfig" pageName="users" />
  </div>
</template>
<script lang="ts" setup>
import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'
// 导入组件
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
// 导入hooks
import { usePageContent } from '@/hooks/usePageContent'

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()
</script>

<style lang="less" scoped></style>
