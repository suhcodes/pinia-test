<template>
  <div class="mx-auto my-12 max-w-xs">
    <div class="text-center">
      <h1>This is a <span class="font-semibold">Dashboard</span> page!</h1>
      <p class="mb-4">{{ todos.length }} items to do.</p>
    </div>
    <div class="text-center mb-4">
      <input
        v-model="todo"
        type="text"
        class="h-9 rounded-sm"
        @keyup.enter="todo ? addTodo(todo) : ''"
      />
      <button
        class="py-1 px-3 outline rounded-sm ml-2"
        :disabled="!todo"
        @click="addTodo(todo)"
      >
        + New task
      </button>
    </div>
    <div v-for="(item, i) in todos" :key="i">{{ i + 1 }}. {{ item }}</div>
  </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const todo = ref(undefined)

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
const { addTodo } = todoStore
</script>

<style scoped></style>
