<script setup>
defineProps({
  menu: { type: Object, required: true },
});
const emit = defineEmits(["remove"]);
</script>

<template>
  <li>
    [{{ menu.category }}] {{ menu.name }}
    <button @click="emit('remove', menu.id)">삭제</button>
  </li>
</template>
