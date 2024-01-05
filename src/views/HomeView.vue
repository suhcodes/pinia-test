<template>
  <div class="max-w-lg mx-auto my-12">
    <h1 class="text-center mb-4 dasboard-header">This is a Welcome page!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia
      nobis accusamus corrupti molestias vero sit numquam libero. Veritatis
      iusto, pariatur fuga eum quod odit sed velit nostrum earum commodi.
    </p>
  </div>
  <DSurvey v-if="isAuthUser" />
</template>

<script setup>
import DSurvey from '@/components/DSurvey.vue'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { isAuthUser } = storeToRefs(authStore)
</script>

<style scoped></style>
