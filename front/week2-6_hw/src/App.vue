<script setup>
import { ref, computed, watch } from "vue";
import MenuForm from "./components/MenuForm.vue";
import MenuItem from "./components/MenuItem.vue";
import CategorySelect from "./components/CategorySelect.vue";
import RouletteResult from "./components/RouletteResult.vue";

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

const category = ref("전체");
const result = ref("");
const spinning = ref(false);
let timer = null;

const filteredMenus = computed(() =>
  category.value === "전체"
    ? menus.value
    : menus.value.filter((menu) => menu.category === category.value),
);

function addMenu(menu) {
  menus.value.push({ id: Date.now(), ...menu });
}

function removeMenu(id) {
  menus.value = menus.value.filter((menu) => menu.id !== id);
}

function spin() {
  if (spinning.value || filteredMenus.value.length === 0) return;
  spinning.value = true;

  timer = setInterval(() => {
    const list = filteredMenus.value;
    if (list.length === 0) return;
    result.value = list[Math.floor(Math.random() * list.length)].name;
  }, 100);

  setTimeout(() => {
    clearInterval(timer);
    spinning.value = false;
  }, 2000);
}

watch(category, () => {
  result.value = "";
});
</script>

<template>
  <h1>오늘 뭐 먹지?</h1>
  <CategorySelect v-model="category" />
  <RouletteResult :result="result" :spinning="spinning" />
  <button @click="spin" :disabled="spinning || filteredMenus.length === 0">
    {{ spinning ? "고르는 중..." : "룰렛 돌리기" }}
  </button>
  <hr />

  <MenuForm @add="addMenu" />

  <p v-if="filteredMenus.length === 0">이 카테고리엔 메뉴가 없어요.</p>
  <ul v-else>
    <MenuItem
      v-for="menu in filteredMenus"
      :key="menu.id"
      :menu="menu"
      @remove="removeMenu"
    />
  </ul>
</template>
