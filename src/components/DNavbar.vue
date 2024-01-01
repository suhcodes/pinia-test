<template>
  <nav class="flex m-4 justify-between">
    <div class="flex gap-2">
      <RouterLink v-for="route in routes" :key="route" :to="route.path">
        {{ route.name }}
      </RouterLink>
    </div>
    <div>{{ name }}</div>
  </nav>
</template>

<script setup>
defineProps({ name: { type: String, required: true }, routes: { type: Array, required: true } })
</script>

<style scoped></style>
