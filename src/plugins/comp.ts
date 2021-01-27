import Vue from 'vue';

import CodeExample from '@/components/code-example/index.vue';

[CodeExample].forEach((Comp) => {
    Vue.component(Comp.name, Comp);
});
