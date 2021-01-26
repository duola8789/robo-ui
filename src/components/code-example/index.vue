<template>
    <el-card class="code-card" header="代码示例">
        <p class="code-item" v-for="item in _code" :key="item" v-text="item"></p>
    </el-card>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class CodeExample extends Vue {
    @Prop({type: [String, Array], required: true}) code!: string | string[];

    get _code() {
        return Array.isArray(this.code) ? this.code : [this.code];
    }
}
</script>

<style scoped lang="scss">
.code-card {
    margin-top: 16px;

    .code-item {
        padding: 8px 0;
        background: #fafafa;
        color: #3182bd;
        font-family: monospace;
    }
}
</style>
