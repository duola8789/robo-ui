import Vue from 'vue';
import VueRouter from 'vue-router';
import {ROUTE_CONFIGS} from '@/config';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    ...ROUTE_CONFIGS
];

const router = new VueRouter({routes});

export default router;
