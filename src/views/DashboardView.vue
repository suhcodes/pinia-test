<template>
  <div class="mx-auto my-12 max-w-xs">
    <div class="text-center">
      <h1>This is a <span class="font-semibold">Dashboard</span> page!</h1>
      <p class="mb-4">{{ todos.length }} items to do.</p>
    </div>
    <DTodoList :todos="todos" @add="addItem" />
  </div>
</template>

<script setup>
import DTodoList from '@/components/DTodoList.vue'
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
const { addTodo } = todoStore

const addItem = (event) => addTodo(event)
</script>

<style scoped></style>
