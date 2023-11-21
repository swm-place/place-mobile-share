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
      <v-container id="mobile-root" class="pa-0 pb-4">
        <v-img
            height="300"
            aspect-ratio="16/9"
            cover
            :src="data['places'][0]['img']"
        ></v-img>
        <v-container class="title pl-4 pr-4">
          {{ data['title'] }}
        </v-container>
        <v-container class="pl-2 pr-2 pt-0">
          <v-row
              align="center"
              no-gutters
          >
            <v-col class="pl-2 pr-2">
              <CourseDescriptionComponent
                  title="지역"
                  :content="data['region_name']"
              />
            </v-col>
            <v-col class="pl-2 pr-2">
              <CourseDescriptionComponent
                  title="이동거리"
                  :content="data['distance']"
              />
            </v-col>
            <v-col class="pl-2 pr-2">
              <CourseDescriptionComponent
                  title="방문 장소"
                  :content="data['count'] + '곳'"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-container class="pt-0">
          <v-container class="subtitle pa-0 pb-1">
            장소 목록
          </v-container>
          <v-col
              align="center"
              no-gutters
          >
            <v-row
                v-for="(item, index) in data['places']"
                class="pt-1 pb-1"
                v-bind:key="index"
            >
              <PlaceCardComponent
                  :title="item['name']"
                  :img="item['img']"
              />
            </v-row>
          </v-col>
        </v-container>
        <v-container class="pt-0">
          <v-btn class="w-100" color="primary">
            앱 열어서 자세히 확인하기
          </v-btn>
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
import PlaceCardComponent from "@/components/course/PlaceCardComponent.vue";
import {useRoute} from "vue-router";
const route = useRoute();
console.log(route.query.data)
console.log(route.query.data.length)
console.log(JSON.parse(decodeURIComponent(route.query.data)))
const data = JSON.parse(decodeURIComponent(route.query.data))
</script>