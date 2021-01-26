/**
 * Created by zh on 2021/1/15.
 */
import CodeExample from './index.vue';

CodeExample.install = function(Vue) {
    Vue.component(CodeExample.name, CodeExample);
};

export default CodeExample;
