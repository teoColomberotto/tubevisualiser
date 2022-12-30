<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="div">data: {{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import { IStopPointCrowdingList } from "../typings/stopPointCrowding";

const { pending, data, error } = useFetch<IStopPointCrowdingList>("/api/cats");
console.log("data: ", data, pending, error);

onMounted(async () => {
  console.log("mounted");
});
</script>
