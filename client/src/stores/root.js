import { defineStore } from 'pinia'
import axios from 'axios'
import { createToast } from "mosha-vue-toastify";
// import the styling for the toast
import "mosha-vue-toastify/dist/style.css";

export const useRootStore = defineStore('root', {
  state: () => ({
    isLoggedIn: false,
    userEmail: '',
    resume: {},
    identityDescSuggest: ""
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

    toast(message, type) {
      createToast(message,
        {
          showIcon: true,
          type,
        })
    },

    async handleLogin(form) {
      try {
        const { data } = await axios({ method: "POST", url: "http://localhost:3000/login", data: form })
        // console.log(data)
        // console.log(form)
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.email)

        this.$router.push('/dashboard')

        // console.log('success login')

        this.checkIsLoggedIn()

        this.toast("Success login", 'success')
      } catch (error) {
        this.toast(error.response.data.message, 'danger')
        console.log(error.response.data)
      }
    },

    async fetchRecommendOpenAi(d) {
      try {
        // console.log(d, '>>><<')
        if (!d.trim()) {
          return this.toast("You need to insert description information!", "danger")
        }

        const access_token = localStorage.access_token

        const query = `
        I create a website to generate a CV, 
        and I want you to alter this sentences more efficient and more attract to HR with 100 words only,

        here is the sentence:
        \`\`\`
            ${d}
        \`\`\`
        `

        const { data } = await axios({
          method: "POST",
          url: "http://localhost:3000/chat-openAi",
          headers: { access_token },
          data: { query }
        })
        // console.log(data)
        this.identityDescSuggest = data.message.content
      } catch (error) {
        // console.log(error, '<>>>')
        console.log(error.response)
        console.log(error)
      }
    },

    async handleRegister(form) {
      try {
        const { data: dataRegister } = await axios({ method: "POST", url: "http://localhost:3000/register", data: form })

        // console.log(dataRegister, "dataregister")
        // if (data)
        this.toast("Success register", 'success')
        if (dataRegister) {
          console.log('success register')

          const { data: dataLogin } = await axios({ method: "POST", url: "http://localhost:3000/login", data: form })

          localStorage.setItem('access_token', dataLogin.access_token)
          localStorage.setItem('email', dataLogin.email)

          this.$router.push('/dashboard')

          console.log('success login')

          this.checkIsLoggedIn()

          this.toast("Success login", 'success')
        }
      } catch (error) {
        this.toast("Failed register", 'danger')
        console.log(error.response.data)
      }
    },

    async fetchResume() {
      try {
        const access_token = localStorage.access_token
        const { data } = await axios({ method: "GET", url: "http://localhost:3000/resumes", headers: { access_token } })
        // console.log(data)
        // console.log(access_token)
        this.resume = data
      } catch (error) {
        // createToast('Gagal fetch')
        console.log(error.response.data)
        if (error.response.data.message == "Not found!") {
          this.toast("Please input your data")
        }
      }
    },

    async handleSubmitResume(form) {
      try {
        // console.log(form);
        const access_token = localStorage.access_token
        const { data } = await axios({ method: "POST", url: "http://localhost:3000/resumes", headers: { access_token }, data: form })

        this.fetchResume()
        // console.log(data)
        this.toast(data.message, 'success')
        return data
      } catch (error) {
        this.toast(error.response.data.message, 'success')
        console.log(error.response.data)
      }
    },
  },
})