<template>
  <el-card
    class="todo-card"
    shadow="hover"
  >
    <div class="item">
      <el-checkbox
        class="checkbox"
        :model-value="checked"
        size="large"
        @change="onToogleChecked" />
      <el-text
        class="text"
        :tag="tagName"
        size="large">{{ name }}</el-text>
      <el-icon class="star"  @click="onToogleStar">
        <StarFilled v-if="isStar" />
        <Star v-else />
      </el-icon>
      <el-button
        class="delete"
        type="danger"
        circle
        @click="onDelete">
        <el-icon>
          <Delete />
        </el-icon>
      </el-button>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { Delete, StarFilled, Star } from '@element-plus/icons-vue';
import { computed } from "vue";
import type { TodoItem } from "@/types";

const props = defineProps<TodoItem>();
const emit = defineEmits<{
  (e: 'remove-item',   id: number): void
  (e: 'toggle-checked',id: number, checked: boolean): void
  (e: 'toggle-star',   id: number, isStar: boolean): void
}>();

const tagName = computed(() => props.checked ? 'del' : 'span')

function onDelete() {
  emit('remove-item', props.id);
}

function onToogleChecked() {
  emit('toggle-checked', props.id, props.checked);
}

function onToogleStar() {
  emit('toggle-star', props.id, props.isStar);
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5em;
}

.checkbox {
  flex: 0 0 auto;
}

.text {
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
}

.star {
  flex: 0 0 auto;
  cursor: pointer;
}

.delete {
  flex: 0 0 auto;
}
</style>
