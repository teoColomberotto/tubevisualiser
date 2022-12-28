<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="appState.toggleDrawer()"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>The Tube visualiser</v-toolbar-title>
  </v-app-bar>
</template>

<script setup>
const appState = useAppStore();
</script>
