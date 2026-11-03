<script setup>
const model = defineModel();
const categories = ["전체", "한식", "중식", "일식", "양식", "분식"];
</script>

<template>
  <select v-model="model">
    <option v-for="item in categories" :key="item" :value="item">
      {{ item }}
    </option>
  </select>
</template>
