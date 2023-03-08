import { createRouter as Router, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = Router({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
