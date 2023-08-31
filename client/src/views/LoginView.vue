<template>
  <div
    class="flex flex-col md:flex-row md:items-center max-w-[90rem] mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-6"
  >
    <div class="w-full md:w-[45%] lg:w-1/2 px-4 py-12 sm:px-6 sm:py-16">
      <div class="max-w-lg mx-auto text-center">
        <h1 class="text-lg font-semibold lg:text-xl">
          Login to your account..
        </h1>
        <p
          class="mt-2 text-sm font-normal lg:text-base text-slate-900 drop-shadow-sm"
        >
          Unlock your potential with our user-friendly CV MAKER platform, and
          create your perfect resume in just a few clicks.
        </p>
      </div>
      <div class="max-w-md mx-auto mt-8 space-y-4">
        <form v-on:submit.prevent="doLogin">
          <div>
            <label for="email" class="block text-sm font-normal capitalize"
              >email</label
            >
            <input
              id="email"
              name="email"
              autocomplete="username"
              required
              v-model="form.email"
              type="email"
              class="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
            />
          </div>
          <div class="mt-4">
            <label for="password" class="block text-sm font-normal capitalize"
              >password</label
            >
            <input
              id="password"
              name="password"
              v-model="form.password"
              autocomplete="current-password"
              required
              type="password"
              class="block w-full px-3 py-2 mt-2 text-sm transition duration-300 ease-in-out border border-gray-300 rounded-lg focus:border-gray-200 focus:ring focus:ring-green-100"
            />
          </div>
          <div
            class="grid items-center justify-end grid-cols-1 mt-4 sm:flex gap-y-3 sm:gap-x-2"
          >
            <RouterLink
              to="/register"
              class="col-span-1 sm:col-span-2 mr-1 underline flex justify-end cursor-pointer text-[.8rem] text-gray-600 hover:text-gray-900 rounded-md focus:outline-none"
              >Register new account?</RouterLink
            >
            <div class="col-span-1">
              <div class="flex items-center justify-end">
                <CustomButton v-bind:buttonInfo="'Login'" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div
      class="md:w-[55%] lg:w-1/2 max-w-xl mx-auto select-none cursor-none pb-4 md:py-10 lg:py-24"
    >
      <img
        src="https://img.freepik.com/premium-vector/resume-cv-flat-icon-business-management-document-icon-vector-illustration_123447-3002.jpg?w=740"
        class="object-cover w-auto h-auto select-none"
        draggable="false"
      />
    </div>
  </div>
</template>
<script>
import CustomButton from "../components/CustomButton.vue";
import { mapActions } from "pinia";
import { useRootStore } from "../stores/root";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useRootStore, ["handleLogin"]),
    doLogin() {
      this.handleLogin(this.form);
      // console.log(this.form);
    },
  },
  components: {
    CustomButton,
  },
};
</script>
