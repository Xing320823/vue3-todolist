<template>
  <div v-if="list.length" class="todo-list">
    <transition-group
      name="list-group"
      tag="div"
      class="list-group"
    >
      <TodoItem
        v-for="(item, id) in list"
        :key="item.id"
        :name="item.name"
        :checked="item.checked"
        :is-star="item.isStar"
        :id="id"
        @remove-item="removeItem"
        @toggle-checked="toggleChecked"
        @toggle-star="toggleStar" />
    </transition-group>
  </div>
  <el-empty v-else class="white-empty" description="Empty notes"/>
  <TodoAddItem @add-item="addItem" />
</template>

<script setup lang="ts">
  import { reactive } from "vue";
  import TodoItem from "./TodoItem.vue";
  import TodoAddItem from "./TodoAddItem.vue";
  import { useTodoList } from "@/composable/useTodoList";

  const {
    list,
    addItem,
    removeItem,
    toggleChecked,
    toggleStar
  } = useTodoList();
  
</script>

<style scoped>
.white-empty :deep .el-empty__description p{
  color: #fff;
}

.list-group-enter-from,
.list-group-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.list-group-enter-to,
.list-group-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.list-group-enter-active,
.list-group-leave-active {
  transition: all 0.3s ease;
}

.list-group-move {
  transition: transform 0.3s ease;
}
</style>

