import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Registration.vue')
    },
    {
        path: '/change_data',
        name: 'ChangeData',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ChangeData.vue')
    },
    {
        path: '/success',
        name: 'Success',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Success.vue')
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router