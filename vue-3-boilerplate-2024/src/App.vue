<script setup>
import { onBeforeMount, computed } from 'vue'
import Navbar from '@/components/DNavbar.vue'
import { useAuthStore } from './stores/authStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

onBeforeMount(() => {
  authStore.authUser()
})

const router = useRouter()
const routes = ref(router.getRoutes())

const authStore = useAuthStore()
const firstName = computed(() => authStore?.firstName)
</script>

<template>
  <main class="max-w-6xl mx-auto">
    <Navbar :name="firstName" :routes="routes" />
    <RouterView />
  </main>
</template>

<style scoped></style>
