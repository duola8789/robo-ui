/**
 * Created By zh on 2021.01.04
 * 在此注册自定义组件为 Plugin
 */
import Vue from 'vue';
import RoboSymbolIcon from '@/packages/robo-symbol-icon/index.vue';
import RoboErrorPage from '@/packages/robo-error-page/index.vue';

[RoboSymbolIcon, RoboErrorPage].forEach((Comp) => {
    Vue.component(Comp.name, Comp);
});
