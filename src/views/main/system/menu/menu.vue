<template>
  <div class="menu">
    <PageSearch
      :form-search-config="formSearchConfig"
      @searchClick="handleQueryClick"
      @resetClick="handleResetClick"
    />
    <PageContent ref="pageContentRef" :table-content-config="tableContentConfig" page-name="menu" />
  </div>
</template>

<script setup lang="ts">
import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { usePageContent } from '@/hooks/usePageContent'

const [pageContentRef, handleQueryClick, handleResetClick] = usePageContent()
</script>

<style scoped></style>
