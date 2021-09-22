<template>
  <div class="goods">
    <PageSearch
      :form-search-config="formSearchConfig"
      @search-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <PageContent ref="pageContentRef" :table-content-config="tableContentConfig" page-name="goods">
      <template #imgUrl="scope">
        <el-image
          style="width: 80px; height: 80px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'

import { usePageContent } from '@/hooks/usePageContent'

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()
</script>

<style scoped></style>
