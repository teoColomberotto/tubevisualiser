<template>
  <v-navigation-drawer v-model="appState.drawer" expand-on-hover rail>
  </v-navigation-drawer>
</template>

<script setup>
const appState = useAppStore();
</script>
