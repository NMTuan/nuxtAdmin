import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', () => {
    const url = ref('/api')
    const login = ref('')
    const logout = ref('')
    const getMe = ref('')
    return {
        url,
        login,
        logout,
        getMe
    }
})
