<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <h1>TEST</h1>
  </div>
</template>

<script setup lang="ts">
// import { trimStopPointNames } from "../utils/utils";
// import { StopPointModes } from "../typings/StopPointMode";
// import { getAllStopPointsCrowding } from "../services/stopPointService";
const { data } = useFetch("/api/stopPoints");
console.log("data: ", data);

onMounted(async () => {
  console.log("mounted");
  // const oldName = "Royal Victoria DLR Station";
  // const mode: StopPointModes = StopPointModes.dlr;
  // const newName: string | undefined = trimStopPointNames(oldName, mode);
  // console.log("new name", newName);
  // const data = ref(await getAllStopPointsCrowding());
  // console.log(data);
});
</script>
