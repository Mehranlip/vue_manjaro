import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',

        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/login.vue')
    },
    {
        path: '/signup',
        name: 'signup',

        component: () =>
            import ( /* webpackChunkName: "singup" */ '../views/signup.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router