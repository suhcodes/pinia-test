import { ref } from '@vue/composition-api'

export default function usePromise(fn) {
  const response = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const createPromise = async (...args) => {
    loading.value = true
    error.value = null
    response.value = true
    try {
      response.value = await fn(...args)
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }
  return { response, loading, error, createPromise }
}
