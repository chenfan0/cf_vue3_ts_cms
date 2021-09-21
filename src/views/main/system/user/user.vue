<template>
  <div class="user">
    <PageSearch :formSearchConfig="formSearchConfig" />
    <PageContent :tableContentConfig="tableContentConfig" pageName="users" />
  </div>
</template>
<script lang="ts" setup>
import { formSearchConfig } from './config/form-search-config'
import { tableContentConfig } from './config/table-content-config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
</script>

<style lang="less" scoped></style>
