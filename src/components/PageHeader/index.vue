<template>
  <ul class="navList">
    <li v-for="item in navList" :key="item.label" class="navItem" @click="changeNav(item.name)">
      {{ item.label }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface NavItem {
  label: string
  name: string
}

const navList: NavItem[] = [
  {
    label: '竹蜻蜓',
    name: 'home'
  },
  {
    label: '日记',
    name: 'journal'
  },
  {
    label: '日志',
    name: 'blog'
  }
]

const router = useRouter()

const changeNav = (name: string) => router.push({ name })
</script>

<style scoped lang="less">
.navList {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  .navItem {
    cursor: pointer;
    background-color: #ef5353;
  }
}
</style>
