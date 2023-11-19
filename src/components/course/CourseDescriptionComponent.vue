<template>
  <div class="description-item pa-2">
    <div class="des-title">{{ props.title }}</div>
    <div class="des-content">{{ props.content }}</div>
  </div>
</template>

<style scoped>
.description-item {
  width: 100%;
  height: 70px;
  background-color: #dadada;
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
}

.description-item > div {
  line-height: 1.1;
}

.des-title {
  color: #646464;
}

.des-content {
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  content: String
});
</script>