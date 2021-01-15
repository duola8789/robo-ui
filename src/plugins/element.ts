import Vue from 'vue';
import {Container, Header, Main, Aside} from 'element-ui';

[Container, Header, Main, Aside].forEach((Comp) => Vue.use(Comp));
