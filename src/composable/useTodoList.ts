import { reactive } from "vue";
import type { TodoItem } from "@/types";

export function useTodoList() {
  const list = reactive<TodoItem[]>([]);

  function addItem(name: string) {
    list.push({
      id: list.length + 1,
      name,
      checked: false,
      isStar: false
    });
  }

  function removeItem(id: number) {
    list.splice(id, 1);
  }

  function toggleChecked(id: number, prev: boolean) {
    list[id].checked = !prev;
  }

  function toggleStar(id: number, prev: boolean) {
    const newStar = !prev;
    list[id].isStar = newStar;

    if (newStar && id > 0) {
      const [item] = list.splice(id, 1);
      list.unshift(item);
    }
  }

  return {
    list,
    addItem,
    removeItem,
    toggleChecked,
    toggleStar,
  };
}