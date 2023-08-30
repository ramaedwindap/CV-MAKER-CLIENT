import { defineStore } from 'pinia'
import axios from 'axios'

export const useRootStore = defineStore('root', {
  state: () => ({
    isLoggedIn: false,
    userEmail: ''
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    checkIsLoggedIn() {
      const access_token = localStorage.access_token
      const emailUser = localStorage.email

      if (access_token) {
        this.isLoggedIn = true
        this.userEmail = emailUser
      }

    },

    async handleLogin(form) {
      try {
        const { data } = await axios({ method: "POST", url: "http://localhost:3000/login", data: form })
        // console.log(data)
        // console.log(form)
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.email)

        this.$router.push('/dashboard')

        console.log('success login')

        this.checkIsLoggedIn()
      } catch (error) {
        console.log(error.response.data)
      }
    },

    async handleRegister(form) {
      try {
        const { data: dataRegister } = await axios({ method: "POST", url: "http://localhost:3000/register", data: form })

        // console.log(dataRegister, "dataregister")
        // if (data)
        if (dataRegister) {
          console.log('success register')

          const { data: dataLogin } = await axios({ method: "POST", url: "http://localhost:3000/login", data: form })

          localStorage.setItem('access_token', dataLogin.access_token)
          localStorage.setItem('email', dataLogin.email)

          this.$router.push('/dashboard')

          console.log('success login')

          this.checkIsLoggedIn()
        }
      } catch (error) {
        console.log(error.response.data)
      }
    }
  },
})