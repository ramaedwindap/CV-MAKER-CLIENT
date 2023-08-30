<template>
  <CustomNavbar />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import CustomNavbar from "./components/CustomNavbar.vue";

export default {
  data() {
    return {};
  },
  components: { CustomNavbar },
};
</script>
