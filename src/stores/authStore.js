import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', {
  state() {
    return {
      user: undefined
    }
  },
  getters: {
    firstName: (state) => state.user.firstName
    /*
      firstName() {
        return this.user.firstName;
      },
    */
  },
  actions: {
    authUser() {
      this.user = {
        firstName: 'Suely',
        lastName: 'Moraes',
        email: 'contact@suh.codes'
      }
    }
  }
})
