<template>
  <CustomNavbar />
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import CustomNavbar from "./components/CustomNavbar.vue";
import { useRootStore } from "./stores/root";
import { mapActions, mapWritableState } from "pinia";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(useRootStore, ["checkIsLoggedIn"]),
  },
  created() {
    this.checkIsLoggedIn();
  },
  components: { CustomNavbar },
};
</script>
