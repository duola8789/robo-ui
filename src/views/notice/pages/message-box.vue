<template>
    <div class="page-container">
        <el-card class="card-item">
            <p slot="header">确认消息</p>
            <el-button type="text" @click="open">点击打开 Message Box</el-button>
        </el-card>
        <el-card class="card-item">
            <p slot="header">居中布局</p>
            <el-button type="text" @click="open2">点击打开 Message Box</el-button>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    open() {
        this.$confirm('您确定要退出吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        })
            .then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
    }

    open2() {
        this.$confirm('您确定要退出登录吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
        })
            .then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
    }
}
</script>
