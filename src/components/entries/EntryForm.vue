<template>
  <form class="grid" action="" @submit.prevent="add({ entry })">
    <UIInput label="Name" v-model="entry.name" />
    <UIInput label="Value" type="number" v-model="entry.value" />
    <UISelect label="Type" v-model="entry.type" :items="types" />
    <UIButton />
  </form>
</template>

<script setup>
// import { ref } from "vue";
import { useEntriesStore } from "@/stores/entries";
import UIInput from "../base/UIInput.vue";
import UISelect from "../base/UISelect.vue";
import UIButton from "../base/UIButton.vue";

// const entry = ref({});
const entriesStore = useEntriesStore();
const { entry, types, add } = entriesStore;
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
</style>
