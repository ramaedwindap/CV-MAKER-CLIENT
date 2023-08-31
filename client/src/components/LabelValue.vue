<template>
  <div>
    <p
      class="flex items-center w-full text-sm font-semibold uppercase select-none drop-shadow-sm"
    >
      {{ label }}
    </p>
    <p
      :class="[
        justify ?? '',
        'w-full px-3 py-2 mt-2 text-sm border border-gray-300 rounded-lg shadow-sm cursor-not-allowed select-all',
      ]"
    >
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "justify"],
  data() {
    return {};
  },
};
</script>
