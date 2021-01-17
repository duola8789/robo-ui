<template>
    <div class="page-container">
        <el-card header="基础用法">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="info">信息按钮（替代幽灵按钮）</el-button>
        </el-card>
        <el-card header="禁用状态">
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="info" disabled>信息按钮（替代幽灵按钮）</el-button>
        </el-card>
        <el-card header="图标按钮">
            <el-button>
                <i class="el-icon-search"></i>
                <span>搜索</span>
            </el-button>
            <el-button>
                <robo-font-icon href="icon-computer" />
                <span>个人工作台</span>
            </el-button>
            <el-button type="primary">
                <robo-font-icon href="icon-computer" />
                <span>个人工作台</span>
            </el-button>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {}
</script>
