import {createRouter, createWebHashHistory} from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";
import CourseComponent from "@/components/course/CourseComponent.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'home', component: HomeComponent},
        {path: '/course', name: 'course', component: CourseComponent}
    ]
})

export default router;
