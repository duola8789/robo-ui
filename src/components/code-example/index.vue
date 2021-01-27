<template>
    <el-card class="code-card" header="代码示例">
        <pre class="code-container">
            <span v-for="item in _code" :key="item" class="code-item" v-text="item" ></span>
        </pre>
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

    .code-container {
        display: flex;
        flex-wrap: wrap;
        padding: 0 16px;
        background: #fafafa;
    }

    .code-item {
        display: block;
        width: 100%;
        padding: 6px 0;
        color: #3182bd;
        font-family: monospace;
        line-height: 1.4;
    }

    ::v-deep {
        .el-card__body {
            background: #fff;
        }
    }
}
</style>
