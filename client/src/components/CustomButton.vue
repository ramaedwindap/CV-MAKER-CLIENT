<template>
  <button
    type="submit"
    class="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-lg hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 undefined sm:w-auto"
  >
    {{ buttonInfo }}
  </button>
</template>

<script>
export default {
  props: ["buttonInfo"],
  data() {
    return {};
  },
};
</script>
