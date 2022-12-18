<template>
  <button>
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "Button",
  },
  type: {
    type: String,
    default: "Primary",
  },
});
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  border-radius: 3px;
  background-color: var(--yale-blue);
  border: none;
  line-height: 2rem;
  font-size: 1rem;
  padding: 0 1rem;
  color: var(--vt-c-white);
}
</style>
