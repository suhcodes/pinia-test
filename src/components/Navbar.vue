<template>
  <div class="flex justify-between px-3 py-2">
    <div class="flex gap-4">
      <RouterLink
        v-for="item in routes"
        :key="item.name"
        :to="item.path"
      >
        {{ item.name }}
      </RouterLink>
    </div>
    <div><h1>logged in as {{ firstName }}</h1></div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const router = useRouter()
const routes = ref(router.getRoutes())

const authStore = useAuthStore()
onBeforeMount(() => {
	authStore.authUser()
})
const firstName = computed(() => authStore?.firstName)
</script>


<style scoped></style>
