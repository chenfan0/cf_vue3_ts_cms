<template>
  <div class="nav-header">
    <div
      class="logo"
      @click="handleFold"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    ></div>

    <div class="breadcrumb">面包屑</div>
    <UserInfo />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import emitter from '@/utilis/eventBus'

import UserInfo from './cpns/user-info.vue'

// 存储是菜单状态（是否折叠）
const isFold = ref(false)

// 折叠菜单处理
function handleFold() {
  isFold.value = !isFold.value
  emitter.emit('clickFold', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  height: 100%;

  .logo {
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    &:hover {
      cursor: pointer;
    }
  }

  .breadcrumb {
    flex: 1;
  }
}
</style>
