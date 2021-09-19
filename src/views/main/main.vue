<template>
  <div class="main">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    {{ $store.state.name }}
    <!-- <el-button type="danger">危险按钮</el-button> -->
  </div>
</template>
<script lang="ts" setup></script>

<style lang="less" scoped></style>
