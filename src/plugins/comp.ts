import Vue from 'vue';

import CodeExample from '@/components/code-example/index.vue';

[{name: 'CodeExample', comp: CodeExample}].forEach((v) => {
    Vue.component(v.name, v.comp);
});
