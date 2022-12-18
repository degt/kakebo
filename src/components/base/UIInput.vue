<template>
  <div>
    <label for="">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
input {
  border: solid 3px var(--yale-blue);
  width: 100%;
  line-height: 2rem;
  font-size: 1rem;
  border-radius: 3px;
}
</style>
