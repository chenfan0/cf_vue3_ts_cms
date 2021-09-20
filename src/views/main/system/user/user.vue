<template>
  <div class="">
    <CFForm v-bind="formItems" />
  </div>
</template>
<script lang="ts" setup>
import { formItems } from './config/formConfig'

import CFForm from '@/base-ui/form'
</script>

<style lang="less" scoped></style>
