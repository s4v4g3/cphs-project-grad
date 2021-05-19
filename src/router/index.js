import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/store',
        name: 'Store',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
    },
    {
        path: '/paymentConfirmation/:orderKey',
        name: 'PaymentConfirmation',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "store" */ '../views/PaymentConfirmation.vue')
    },
    {
        path: '/SiteConfigurationSettings',
        name: 'Configuration',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "store" */ '../views/Configuration.vue')
    },
    {
        path: '/Reports',
        name: 'Reports',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "store" */ '../views/Reports.vue')
    },
    {
        path: '/MissionStatement',
        name: 'MissionStatement',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "store" */ '../views/MissionStatement.vue')
    },
    {
        path: '/History',
        name: 'History',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "store" */ '../views/History.vue')
    },
    {
        path: '/2021Sponsors',
        name: 'Sponsors',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "store" */ '../views/Sponsors.vue')
    },
    {
        path: '/BecomeASponsor',
        name: 'BecomeASponsor',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "store" */ '../views/BecomeASponsor.vue')
    },
    {
        path: '*', redirect: '/'
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
