import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('ToDoStore', () => {
  const todos = ref([])
  const test = ref('test')

  function addTodo(todo) {
    todos.value.push(todo)
  }

  ;(async function () {
    await addTodo('My 1st task')
  })()

  return { todos, addTodo, test }
})
