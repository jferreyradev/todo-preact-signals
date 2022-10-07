import { signal, computed } from "@preact/signals";

export function createAppState() {
    const todos = signal([
        { text: "Write my first post", completed: true, createAt: new Date() },
        { text: "Buy new groceries", completed: false,  createAt: new Date() },
        { text: "Walk the dog", completed: false,  createAt: new Date() },
      ]);
  
    const completed = computed(() => {
      return todos.value.filter(todo => todo.completed).length
    });
  
    return { todos, completed }
  }