<template>
  <v-card class="w-100" height="90">
    <v-card-text class="pa-0">
      <div class="w-100 place-card-root">
        <v-responsive aspect-ratio="1/1" width="90">
          <v-img
              width="90"
              height="90"
              cover
              :src="props.img"
          ></v-img>
        </v-responsive>
        <div class="w-100 pa-4 place-card-title">{{ props.title }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  img: String
});
</script>

<style scoped>

</style>