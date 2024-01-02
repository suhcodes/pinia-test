import { useAuth0 } from '@auth0/auth0-vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('AuthStore', () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
  const authUser = ref(user)
  const isAuthUser = ref(isAuthenticated)

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        target: window.location.pathname
      }
    })
  }

  const handleSignUp = () => {
    loginWithRedirect({
      appState: {
        target: window.location.pathname
      },
      authorizationParams: {
        screen_hint: 'signup'
      }
    })
  }

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: ''
      }
    })
  }
  return { authUser, handleLogin, handleLogout, isAuthUser, handleSignUp }
})
