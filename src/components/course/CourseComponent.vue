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
            src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzExMDRfMTMw%2FMDAxNjk5MDk5NjMyNjg3.7_RsyEYIA1R3UJjPomIkyH8N-Kork17Pbq95tO8Zdv4g.XDFNYDY84C_BvW-cox1pJ7ewn07mKpQZRw4lKyCa2IYg.JPEG%2F20231104_210614.jpg"
        ></v-img>
        <v-container class="title pl-4 pr-4">
          건대 코스
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
          <v-container class="subtitle pa-0 pb-1">
            장소 목록
          </v-container>
          <v-col
              align="center"
              no-gutters
          >
            <v-row class="pt-1 pb-1">
              <PlaceCardComponent
                  title="엔제리너스커피 건대역점"
                  img="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzExMDRfMTMw%2FMDAxNjk5MDk5NjMyNjg3.7_RsyEYIA1R3UJjPomIkyH8N-Kork17Pbq95tO8Zdv4g.XDFNYDY84C_BvW-cox1pJ7ewn07mKpQZRw4lKyCa2IYg.JPEG%2F20231104_210614.jpg"
              />
            </v-row>
            <v-row class="pt-1 pb-1">
              <PlaceCardComponent
                  title="제주곤이칼국수 건대점"
                  img="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221219_73%2F1671415873694AWTMq_JPEG%2FDSC04440.jpg"
              />
            </v-row>
            <v-row class="pt-1 pb-1">
              <PlaceCardComponent
                  title="다빈치보드게임카페"
                  img="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzEwMTlfMjky%2FMDAxNjk3Njg4NDI1Mzk0.PUpHpcBGg6dAwL9q4NVOghwpnLk85OCxKbk6EJyB9bQg.JVVGagelbqxWhAnoGLIMBel4Uk6wKUMA1vOs-D9EQMMg.JPEG%2FF667630C-DAC0-43B2-AA0F-718EE73EA60C.jpeg"
              />
            </v-row>
            <v-row class="pt-1 pb-1">
              <PlaceCardComponent
                  title="이찌방이야기 건대점"
                  img="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230717_57%2F16895940391290Ayxw_JPEG%2FIMG_9734.jpeg"
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
</script>