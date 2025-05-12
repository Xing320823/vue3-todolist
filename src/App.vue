<template>
  <el-container class="todo-container">
    <el-header class="todo-header">
      <h2>📝 Home</h2>
    </el-header>
    <el-main>
      <TodoList />
    </el-main>
  </el-container>
</template>

<script setup>
import TodoList from './components/TodoList.vue'
</script>

<style scoped></style>
