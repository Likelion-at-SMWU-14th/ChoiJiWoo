<script setup>
import { ref } from "vue";

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

function addMenu() {
  if (!newMenu.value.trim()) return;
  menus.value.push({ id: Date.now(), name: newMenu.value, category: "한식" });
  newMenu.value = "";
}

function removeMenu(id) {
  menus.value = menus.value.filter((menu) => menu.id !== id);
}
</script>

<template>
  <h1>오늘 뭐 먹지?</h1>
  <input
    v-model="newMenu"
    @keyup.enter="addMenu"
    placeholder="메뉴 이름을 입력하세요"
  />
  <button @click="addMenu">추가</button>
  <ul>
    <li v-for="menu in menus" :key="menu.id">
      [{{ menu.category }}] {{ menu.name }}
      <button @click="removeMenu(menu.id)">삭제</button>
    </li>
  </ul>
</template>
