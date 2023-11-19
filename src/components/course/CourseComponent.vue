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
      <v-container id="mobile-root" class="pa-0">
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
              <CourseDescriptionComponent
                  title="지역"
                  content="서울특별시"
              />
            </v-col>
            <v-col class="pl-2 pr-2">
              <CourseDescriptionComponent
                  title="이동거리"
                  content="1.2km"
              />
            </v-col>
            <v-col class="pl-2 pr-2">
              <CourseDescriptionComponent
                  title="방문 장소"
                  content="4곳"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-container class="pt-0">
          <v-container class="subtitle pa-0 pb-2">
            장소 목록
          </v-container>
          <v-col
              align="center"
              no-gutters
          >
            <v-row>
              <v-card class="w-100">
                <v-card-text>
                  <div class="w-100">
                    sss
                  </div>
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-container>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style lang="scss">
@import "../../css/course/mobile-course-style.scss";
</style>
<script setup>
import CourseDescriptionComponent from "@/components/course/CourseDescriptionComponent.vue";
</script>