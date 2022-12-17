<template>
  <div>
    <pre>Entry: {{ entry }}</pre>

    <div v-for="{ name, value, type } in items" :key="name">
      <pre>
name: {{ name }}
value: {{ value }}
type: {{ type }}
       </pre
      >
    </div>

    <form action="" @submit.prevent="add({ entry })">
      <label for="">Name</label>
      <input type="text" v-model="entry.name" />
      <label for="">Value</label>
      <input type="text" v-model="entry.value" />
      <label for="">Type</label>
      <input type="text" v-model="entry.type" />
      <button>Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useEntriesStore } from "@/stores/entries";

console.log("hello script setup");
const entry = ref({});
const entriesStore = useEntriesStore();
const { items, add } = entriesStore;

// function addEntry() {
//   console.log(entry, entry.value);
//   entriesStore.add({ entry: entry.value });
//   //   entry = {};
//   //   console.log("addEntry", ;
// }

// export default {
//   data() {
//     return {
//       entry: {},
//     };
//   },
//   methods: {
//     add() {
//       console.log(this);
//     },
//   },
// };
</script>

<style lang="scss" scoped></style>
