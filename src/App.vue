<template>
  <el-container>
    <el-header>
      <PageHeader />
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <el-footer>
      <PageFooter />
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader/index.vue'
import PageFooter from '@/components/PageFooter/index.vue'
</script>

<style scoped lang="less">
.el-header {
  width: 100%;
  height: 100px;
  border: 1px solid #352d2d;
}

.el-main {
  width: 100%;
  min-height: calc(100vh - 200px);
}

.el-footer {
  width: 100%;
  height: 100px;
  background-color: #352d2d;
}
</style>
