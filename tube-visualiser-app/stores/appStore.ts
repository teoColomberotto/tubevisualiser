export const useAppStore = defineStore("AppStore", {
  state: () => {
    return { drawer: false };
  },
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}
