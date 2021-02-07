<template>
    <div class="page-container">
        <el-card class="page-title">使用 Symbol 方式引入阿里的 IconFont</el-card>
        <el-card header="将 icon 名称传给组件的 href 属性 ">
            <robo-font-icon href="icon-maintain-solid" />
            <robo-font-icon href="icon-maintain" />
            <code-example :code="code" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class SymbolIconPage extends Vue {
    get code() {
        return ['<robo-font-icon href="icon-maintain-solid" />', '<robo-font-icon href="icon-maintain" />'];
    }
}
</script>

<style scoped lang="scss">
.page-container {
    ::v-deep .robo-font-icon {
        font-size: 16px;
        margin-right: 16px;
        transition: 0.1s linear all;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: #1f66ff;
        }
    }
}
</style>
