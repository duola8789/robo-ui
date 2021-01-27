<template>
    <div class="page-container">
        <el-card header="全局loading">
            <el-button @click="showGlobalLoading">全局Loading</el-button>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    showGlobalLoading() {
        const loading = this.$loading({
            lock: true,
            background: 'rgba(255, 255, 255, 0.6)'
        });
        setTimeout(() => {
            loading.close();
        }, 21000);
    }
}
</script>
