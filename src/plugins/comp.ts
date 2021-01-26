import Vue from 'vue';

import CodeExample from '@/components/code-example/index.vue';

[CodeExample].forEach((Comp) => {
    console.log(Comp.name);
    Vue.component(Comp.name, Comp);
});
