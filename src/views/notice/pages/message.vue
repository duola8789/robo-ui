<template>
    <div class="page-container">
        <el-card header="不同状态">
            <el-button type="text" @click="open1(false)">消息</el-button>
            <el-button type="text" @click="open2(false)">成功</el-button>
            <el-button type="text" @click="open3(false)">警告</el-button>
            <el-button type="text" @click="open4(false)">错误</el-button>
        </el-card>
        <el-card header="可关闭">
            <el-button type="text" @click="open1(true)">消息</el-button>
            <el-button type="text" @click="open2(true)">成功</el-button>
            <el-button type="text" @click="open3(true)">警告</el-button>
            <el-button type="text" @click="open4(true)">错误</el-button>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    open1(showClose = false) {
        this.$message({
            message: '这是一条消这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息息',
            type: 'info',
            showClose
        });
    }

    open2(showClose = false) {
        this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success',
            showClose
        });
    }

    open3(showClose = false) {
        this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning',
            showClose
        });
    }

    open4(showClose = false) {
        this.$message({
            message: '错了哦，这是一条错误消息',
            type: 'error',
            showClose
        });
    }
}
</script>
