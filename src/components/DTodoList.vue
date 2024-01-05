<template>
  <div class="text-center mb-4">
    <input
      v-model="todo"
      type="text"
      class="h-9 rounded-sm"
      @keyup.enter="todo ? $emit('add', todo) : ''"
    />
    <button
      class="py-1 px-3 outline rounded-sm ml-2"
      :disabled="!todo"
      @click="$emit('add', todo)"
    >
      + New task
    </button>
  </div>
  <div v-for="(item, i) in todos" :key="i">{{ i + 1 }}. {{ item }}</div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['add'])
defineProps({
  todos: { type: Array, required: false, default: undefined }
})

const todo = ref(undefined)
</script>
