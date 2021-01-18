<template>
    <div class="page-container">
        <el-card header="基础用法">
            <el-checkbox v-model="checked">备选项</el-checkbox>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {
    checked = false;
}
</script>
