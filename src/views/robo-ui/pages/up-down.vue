<template>
    <div class="page-container">
        <el-card header="上下移动手柄">
            <robo-up-down @move="onMove" />
            <code-example :code="code1" />
        </el-card>
        <el-card header="可分别传入 up-disable 和 down-disable，来控制不可点击状态">
            <robo-up-down :up-disabled="true" @move="onMove" />
            <code-example :code="code1" />
        </el-card>
        <el-card header="为 size 传入 medium/small/mini，控制尺寸，默认为 small">
            <div class="item">
                <robo-up-down size="medium" />
                <robo-up-down size="small" />
                <robo-up-down size="mini" />
            </div>
            <code-example :code="code3" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class UpDown extends Vue {
    onMove(direction: 'up' | 'down') {
        console.log(direction);
    }

    get code1() {
        return '<robo-up-down @move="onMove" />';
    }

    get code2() {
        return ' <robo-up-down @move="onMove" :up-disabled="true" />';
    }

    get code3() {
        return '<robo-up-down size="medium" />\n' + '<robo-up-down size="small" />\n' + '<robo-up-down size="mini" />';
    }
}
</script>

<style lang="scss">
.item {
    display: flex;
    align-items: center;

    ::v-deep {
        .robo-up-down {
            margin-right: 16px;
        }
    }
}
</style>
