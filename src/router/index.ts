import Vue from 'vue';
import VueRouter from 'vue-router';
import {ROUTE_CONFIGS} from '@/config';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    ...ROUTE_CONFIGS,
    {
        path: '*',
        component: () => import('@/packages/robo-error-page/index.vue')
    }
];

const router = new VueRouter({routes});

export default router;
