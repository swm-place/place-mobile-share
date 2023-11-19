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
        <v-container class="pl-2 pr-2 pt-0">
          <v-row
              align="center"
              no-gutters
          >
            <v-col class="pl-2 pr-2">
              <div class="description-item pa-2">
                <div class="des-title">지역</div>
                <div class="des-content">서울특별시 광진구 화양동</div>
              </div>
            </v-col>
            <v-col class="pl-2 pr-2">
              <div class="description-item"></div>
            </v-col>
            <v-col class="pl-2 pr-2">
              <div class="description-item"></div>
            </v-col>
          </v-row>
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