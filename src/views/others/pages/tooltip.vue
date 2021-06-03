<template>
    <div class="page-container">
        <el-card header="对 light 主题进行了改造">
            <el-tooltip content="Bottom center" placement="right" effect="light">
                <el-button>Light</el-button>
            </el-tooltip>
            <code-example :code="code1" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Tooltip extends Vue {
    get code1() {
        return (
            '<el-tooltip content="Bottom center" placement="right" effect="light">\n' +
            '    <el-button>Light</el-button>\n' +
            '</el-tooltip>'
        );
    }
}
</script>
