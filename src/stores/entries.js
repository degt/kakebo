import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

const ENTRY_TYPES = {
  EXPENSE: "expense",
  INCOME: "income",
  SAVING: "saving",
  DEBT_REPAYMENT: "debt repayment",
  INVESTMENT: "investment",
  OTHER: "other",
};

const defaultEntry = () => {
  return {
    name: "",
    value: 0,
    type: Object.keys(ENTRY_TYPES)[0],
  };
};

export const useEntriesStore = defineStore("entries", {
  // other options...
  state: () => ({
    entry: defaultEntry(),
    items: [],
    types: ENTRY_TYPES,
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    add({ entry }) {
      this.items.push({ ...entry });
      this.$patch({
        entry: defaultEntry(),
      });
    },
  },
});
