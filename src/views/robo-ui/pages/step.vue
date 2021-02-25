<template>
    <div class="page-container">
        <el-card
            header="垂直步骤条，传入 title 设置标题，传入 status 设置左侧小圆点颜色，目前只支持默认 finish 和 default，robo-step 的默认 slot 插入额外内容"
        >
            <div class="steps-container">
                <robo-steps>
                    <robo-step
                        v-for="step in steps1"
                        :key="step.title"
                        :title="step.title"
                        :status="step.processStatus"
                    >
                        {{ step.content }}
                    </robo-step>
                </robo-steps>
            </div>
            <code-example :code="code1" />
        </el-card>

        <el-card header="不传入 space 时会默认将剩余空间占满，为 space 传入一个数字后，会按照固定间隔排列">
            <div class="steps-container">
                <robo-steps :space="50">
                    <robo-step
                        v-for="step in steps1"
                        :key="step.title"
                        :title="step.title"
                        :status="step.processStatus"
                    >
                        {{ step.content }}
                    </robo-step>
                </robo-steps>
            </div>
            <code-example :code="code2" />
        </el-card>

        <el-card header="通过robo-step 的默认 slot 插入下拉选框、按钮等节点">
            <div class="steps-container">
                <robo-steps>
                    <robo-step title="起点" status="finish">
                        <el-select v-model="value1" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </robo-step>
                    <robo-step title="途经点">
                        <el-button type="text">
                            <robo-font-icon href="icon-add" />
                            已有站点
                        </el-button>
                        <el-button type="text">
                            <robo-font-icon href="icon-add" />
                            新采集站点
                        </el-button>
                    </robo-step>
                    <robo-step title="终点" status="finish">
                        <el-select v-model="value2" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </robo-step>
                </robo-steps>
            </div>
            <code-example :code="code3" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Tab extends Vue {
    steps1 = [
        {title: '步骤 1', content: '我爱吃黄金糕', processStatus: 'finish'},
        {title: '步骤 2', content: '我爱吃黄金糕'},
        {title: '步骤 3', content: '我爱吃黄金糕我爱吃黄金糕我爱吃黄金糕', processStatus: 'finish'}
    ];

    value1 = '';
    value2 = '';
    options = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'},
        {value: '选项6', label: '北京烤鸭'},
        {value: '选项7', label: '北京烤鸭'},
        {value: '选项8', label: '北京烤鸭'},
        {value: '选项9', label: '北京烤鸭'}
    ];

    get code1() {
        return (
            '<robo-steps>\n' +
            '    <robo-step title="起点" status="finish">\n' +
            '        <el-select v-model="value1" placeholder="请选择">\n' +
            '            <el-option\n' +
            '                v-for="item in options"\n' +
            '                :key="item.value"\n' +
            '                :label="item.label"\n' +
            '                :value="item.value"\n' +
            '            ></el-option>\n' +
            '        </el-select>\n' +
            '    </robo-step>\n' +
            '    <robo-step title="途经点">\n' +
            '        <el-button type="text">\n' +
            '            <robo-font-icon href="icon-add" />\n' +
            '            已有站点\n' +
            '        </el-button>\n' +
            '        <el-button type="text">\n' +
            '            <robo-font-icon href="icon-add" />\n' +
            '            新采集站点\n' +
            '        </el-button>\n' +
            '    </robo-step>\n' +
            '    <robo-step title="终点" status="finish">\n' +
            '        <el-select v-model="value2" placeholder="请选择">\n' +
            '            <el-option\n' +
            '                v-for="item in options"\n' +
            '                :key="item.value"\n' +
            '                :label="item.label"\n' +
            '                :value="item.value"\n' +
            '            ></el-option>\n' +
            '        </el-select>\n' +
            '    </robo-step>\n' +
            '</robo-steps>'
        );
    }

    get code2() {
        return (
            '<robo-steps :space="50">\n' +
            '    <robo-step\n' +
            '        v-for="step in steps1"\n' +
            '        :key="step.title"\n' +
            '        :title="step.title"\n' +
            '        :status="step.processStatus"\n' +
            '    >\n' +
            '        {{ step.content }}\n' +
            '    </robo-step>\n' +
            '</robo-steps>'
        );
    }

    get code3() {
        return (
            '<robo-steps>\n' +
            '    <robo-step title="起点" status="finish">\n' +
            '        <el-select v-model="value1" placeholder="请选择">\n' +
            '            <el-option\n' +
            '                v-for="item in options"\n' +
            '                :key="item.value"\n' +
            '                :label="item.label"\n' +
            '                :value="item.value"\n' +
            '            ></el-option>\n' +
            '        </el-select>\n' +
            '    </robo-step>\n' +
            '    <robo-step title="途经点">\n' +
            '        <el-button type="text">\n' +
            '            <robo-font-icon href="icon-add" />\n' +
            '            已有站点\n' +
            '        </el-button>\n' +
            '        <el-button type="text">\n' +
            '            <robo-font-icon href="icon-add" />\n' +
            '            新采集站点\n' +
            '        </el-button>\n' +
            '    </robo-step>\n' +
            '    <robo-step title="终点" status="finish">\n' +
            '        <el-select v-model="value2" placeholder="请选择">\n' +
            '            <el-option\n' +
            '                v-for="item in options"\n' +
            '                :key="item.value"\n' +
            '                :label="item.label"\n' +
            '                :value="item.value"\n' +
            '            ></el-option>\n' +
            '        </el-select>\n' +
            '    </robo-step>\n' +
            '</robo-steps>'
        );
    }
}
</script>

<style lang="scss">
.steps-container {
    height: 400px;
    padding: 0 16px;
}
</style>
