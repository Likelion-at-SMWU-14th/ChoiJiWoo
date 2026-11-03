<script setup>
import { ref } from "vue";

const emit = defineEmits(["add"]);
const name = ref("");
const category = ref("한식");

function submit() {
  if (!name.value.trim()) return;
  emit("add", { name: name.value, category: category.value });
  name.value = "";
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="name" placeholder="메뉴 이름을 입력하세요" />
    <select v-model="category">
      <option>한식</option>
      <option>중식</option>
      <option>일식</option>
      <option>양식</option>
      <option>분식</option>
    </select>
    <button>추가</button>
  </form>
</template>
