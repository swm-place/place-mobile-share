import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";
import CourseComponent from "@/components/course/CourseComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: HomeComponent},
        {path: '/course', name: 'course', component: CourseComponent}
    ]
})

export default router;
