<script setup>
defineProps({
  result: { type: String, default: "" },
  spinning: { type: Boolean, default: false },
});
</script>

<template>
  <div class="box" :class="{ spinning: spinning }">
    <p v-if="!result">버튼을 눌러보세요!</p>
    <p v-else-if="spinning">{{ result }}</p>
    <p v-else>
      오늘은 <strong>{{ result }}</strong> !
    </p>
  </div>
</template>

<style scoped>
.box {
  padding: 24px;
  margin: 16px 0;
  border: 2px dashed #bbb;
  border-radius: 12px;
  text-align: center;
  font-size: 1.4rem;
}
.spinning {
  border-color: rgb(252, 141, 72);
  color: rgb(255, 64, 64);
}
</style>
