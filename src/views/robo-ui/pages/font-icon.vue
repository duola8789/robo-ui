<template>
    <div class="page-container">
        <el-card header="使用 Symbol 方式引入阿里的 IconFont ">
            <robo-font-icon href="icon-thumb-up" />
            <robo-font-icon href="icon-thumb-down" />
        </el-card>
        <el-card header="加载失败时会展示默认图标">
            <robo-font-icon href="icon-thumb-up123" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class SymbolIconPage extends Vue {}
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
