<template>
  <v-layout>
<!--    <v-app-bar-->
<!--        color="primary"-->
<!--        density="compact"-->
<!--    >-->
<!--      <v-app-bar-title>장소 정보</v-app-bar-title>-->
<!--      <template v-slot:append>-->
<!--        <v-btn icon="mdi-heart"></v-btn>-->
<!--      </template>-->
<!--    </v-app-bar>-->

    <v-main>
      <v-container id="mobile-root" class="pt-0">
        <v-img
            aspect-ratio="16/9"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
        <v-container class="title pl-4 pr-4">
          코스 이름
        </v-container>

      </v-container>
    </v-main>
  </v-layout>
</template>

<style lang="scss">
@import "../../css/layout/mobile-appbar-style.scss";
</style>
<script setup>
</script>