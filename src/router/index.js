import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/Home',
        alias: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/R2',
        name: 'R2',
        component: () => import(/* webpackChunkName: "r2" */ '../views/R2.vue')
    }
    
];
  
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;