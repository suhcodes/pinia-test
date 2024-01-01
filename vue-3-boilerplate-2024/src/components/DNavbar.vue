<template>
  <nav class="flex m-4 justify-between">
    <div class="flex gap-2">
      <RouterLink v-for="route in routes" :key="route" :to="route.path">
        {{ route.name }}
      </RouterLink>
    </div>
    <div>{{ firstName }}</div>
  </nav>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
const router = useRouter()
const routes = ref(router.getRoutes())
const authStore = useAuthStore()
onBeforeMount(() => {
  authStore.authUser()
})
const firstName = computed(() => authStore?.firstName)
</script>

<style scoped></style>
