<template>
  <div class="department">
    <PageSearch
      :form-search-config="formSearchConfig"
      @search-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <PageContent
      page-name="department"
      :table-content-config="tableContentConfig"
      ref="pageContentRef"
    />
  </div>
</template>

<script lang="ts" setup>
import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'

import { usePageContent } from '@/hooks/usePageContent'

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()
</script>

<style scoped></style>
