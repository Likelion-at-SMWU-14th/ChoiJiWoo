<script setup>
import { ref } from "vue";
import MenuForm from "./components/MenuForm.vue";
import MenuItem from "./components/MenuItem.vue";

const menus = ref([
  { id: 1, name: "김치찌개", category: "한식" },
  { id: 2, name: "삼겹살", category: "한식" },
  { id: 3, name: "짜장면", category: "중식" },
  { id: 4, name: "마라탕", category: "중식" },
  { id: 5, name: "초밥", category: "일식" },
  { id: 6, name: "파스타", category: "양식" },
  { id: 7, name: "떡볶이", category: "분식" },
  { id: 8, name: "김밥", category: "분식" },
]);

const newMenu = ref("");

function addMenu(menu) {
  menus.value.push({ id: Date.now(), ...menu });
}

function removeMenu(id) {
  menus.value = menus.value.filter((menu) => menu.id !== id);
}
</script>

<template>
  <h1>오늘 뭐 먹지?</h1>
  <MenuForm @add="addMenu" />
  <ul>
    <MenuItem
      v-for="menu in menus"
      :key="menu.id"
      :menu="menu"
      @remove="removeMenu"
    />
  </ul>
</template>
