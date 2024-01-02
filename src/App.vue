<template>
  <main class="max-w-6xl mx-auto">
    <Navbar
      :routes="routes"
      :actions="actions"
      :user="authUser"
      :is-auth-user="isAuthUser"
      @handle-login="handleLogin"
      @handle-logout="handleLogout"
      @handle-sign-up="handleSignUp"
    />
    <RouterView />
  </main>
</template>

<script setup>
import Navbar from '@/components/DNavbar.vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const authStore = useAuthStore()
const { handleLogin, handleLogout, handleSignUp } = authStore
const { isAuthUser, authUser } = storeToRefs(authStore)

const actions = computed(() => [
  {
    name: 'Login',
    trigger: 'handleLogin',
    show: !isAuthUser.value
  },
  {
    name: 'Sign Up',
    trigger: 'handleSignUp',
    show: !isAuthUser.value
  },
  {
    name: 'Logout',
    trigger: 'handleLogout',
    show: isAuthUser.value
  }
])

const router = useRouter()
const routes = computed(() => {
  return isAuthUser.value
    ? router.getRoutes()
    : router.getRoutes().filter((route) => !route.beforeEnter)
})
</script>

<style scoped></style>
