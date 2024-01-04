<template>
  <nav class="flex m-4 justify-between">
    <div class="flex gap-4">
      <RouterLink
        v-for="route in routes"
        :key="route"
        :to="route.path"
        class="my-1"
      >
        {{ route.name }}
      </RouterLink>
    </div>
    <div class="flex items-center gap-4">
      <p v-if="user">
        Logged in as <span class="font-semibold">{{ user.name }}</span>
      </p>
      <template v-for="action in actions" :key="action.name">
        <button
          v-if="action.show"
          :id="action.trigger"
          class="py-2 px-3 rounded-sm outline"
          @click="$emit(action.trigger)"
        >
          {{ action.name }}
        </button>
      </template>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  routes: { type: Array, required: true },
  actions: { type: Array, required: true },
  user: { type: Object, required: false, default: undefined }
})
</script>

<style scoped></style>
