import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('ToDoStore', () => {
  const todos = ref([])

  function addTodo(todo) {
    todos.value.push(todo)
  }

  ;(async function init() {
    await addTodo('My 1st task')
  })()

  return { todos, addTodo }
})