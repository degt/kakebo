<template>
  <div>
    <label for="">{{ label }}</label>
    <select
      name=""
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled>Please Choose...</option>

      <option
        :selected="modelValue === key"
        :value="key"
        v-for="(value, key) in items"
        :key="key"
      >
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: {
    type: String,
    default: "",
  },
  items: {
    type: [Array, Object],
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
select {
  border: solid 3px var(--yale-blue);
  width: 100%;
  line-height: 2rem;
  font-size: 1rem;
  border-radius: 3px;
  height: 2rem;
}
</style>
