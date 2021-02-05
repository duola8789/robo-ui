<template>
    <div class="page-container">
        <el-card
            header="行内表单：注意需要参数 inline 参数，并且配合 robo-form-in-border 类名实现以下样式，为 form-item
                    添加类名，并使用 ele-form-prefix mixin 来扩展左侧标签宽度"
        >
            <el-form label-position="left" :model="value" inline class="robo-form-in-border">
                <el-form-item label="名称" label-width="70px" class="name-item" required>
                    <el-input v-model="value.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="value.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="value.type"></el-input>
                </el-form-item>
                <el-form-item label="日期" class="name-item">
                    <el-date-picker v-model="value.date" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="日期范围" class="date-range-item">
                    <el-date-picker v-model="value.dateRange" type="daterange"></el-date-picker>
                </el-form-item>
                <el-form-item label="时间">
                    <el-time-picker
                        v-model="value.time"
                        :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                        }"
                        placeholder="任意时间点"
                    ></el-time-picker>
                </el-form-item>
                <el-form-item label="日期范围">
                    <robo-select-multi title="吃货食谱" :options="options" :value.sync="value1" :hide-title="true" />
                </el-form-item>
            </el-form>
            <code-example :code="code1" />
        </el-card>
        <el-card header="顶部对齐：label-position 设为 true，使用 robo-select-multi 时需要将 hide-title 设为 true">
            <div class="form-container">
                <el-form label-position="top" :model="value">
                    <el-form-item label="名称" label-width="80px" required>
                        <el-input v-model="value.name" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select v-model="value.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input v-model="value.type"></el-input>
                    </el-form-item>
                    <el-form-item label="日期">
                        <el-date-picker v-model="value.date" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="日期范围">
                        <el-date-picker v-model="value.dateRange" type="daterange"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="时间">
                        <el-time-picker
                            v-model="value.time"
                            :picker-options="{
                                selectableRange: '18:30:00 - 20:30:00'
                            }"
                            placeholder="任意时间点"
                        ></el-time-picker>
                    </el-form-item>
                    <el-form-item label="吃点啥">
                        <robo-select-multi :options="options" :value.sync="value1" :hide-title="true" :width="320" />
                    </el-form-item>
                </el-form>
            </div>
            <code-example :code="code2" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Form extends Vue {
    value = {
        name: '',
        region: '',
        type: '',
        date: '',
        time: '',
        dateRange: []
    };

    value1 = [];

    options = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
    ];

    get code1() {
        return [
            '<el-form label-position="left" :model="value" inline class="robo-form-in-border">\n' +
                '    <el-form-item label="名称" label-width="80px" class="name-item" required>\n' +
                '        <el-input v-model="value.name" placeholder="请输入"></el-input>\n' +
                '    </el-form-item>\n' +
                '    <el-form-item label="活动区域">\n' +
                '        <el-select v-model="value.region" placeholder="活动区域">\n' +
                '            <el-option label="区域一" value="shanghai"></el-option>\n' +
                '            <el-option label="区域二" value="beijing"></el-option>\n' +
                '        </el-select>\n' +
                '    </el-form-item>\n' +
                '    <el-form-item label="活动形式">\n' +
                '        <el-input v-model="value.type"></el-input>\n' +
                '    </el-form-item>\n' +
                '    <el-form-item label="日期" class="name-item">\n' +
                '        <el-date-picker v-model="value.date" type="date" placeholder="选择日期"></el-date-picker>\n' +
                '    </el-form-item>\n' +
                '    <el-form-item label="日期范围" class="date-range-item">\n' +
                '        <el-date-picker v-model="value.dateRange" type="daterange"></el-date-picker>\n' +
                '    </el-form-item>\n' +
                '    <el-form-item label="时间">\n' +
                '        <el-time-picker\n' +
                '            v-model="value.time"\n' +
                '            placeholder="任意时间点"\n' +
                '        ></el-time-picker>\n' +
                '    </el-form-item>\n' +
                '    <el-form-item label="日期范围">\n' +
                '        <robo-select-multi title="吃货食谱" :options="options" :value.sync="value1" :hide-title="true" />\n' +
                '    </el-form-item>\n' +
                '</el-form>',
            '.name-item {\n' +
                '    @include ele-form-prefix(280px, 60px); // 第一个参数是整体宽度，第二个参数是左侧标签区域宽度 \n' +
                '}\n' +
                '.date-range-item {\n' +
                '    @include ele-form-prefix(320px, 60px);\n' +
                '}'
        ];
    }

    get code2() {
        return (
            '<el-form label-position="top" :model="value">\n' +
            '    <el-form-item label="名称" label-width="80px" required>\n' +
            '        <el-input v-model="value.name" placeholder="请输入"></el-input>\n' +
            '    </el-form-item>\n' +
            '    <el-form-item label="吃点啥">\n' +
            '        <robo-select-multi :options="options" :value.sync="value1" :hide-title="true" :width="320" />\n' +
            '    </el-form-item>\n' +
            '</el-form>\n'
        );
    }
}
</script>

<style lang="scss">
.page-container {
    .name-item {
        @include ele-form-prefix(280px, 65px);
    }

    .date-range-item {
        @include ele-form-prefix(320px, 60px);
    }

    .form-container {
        width: 896px;
        padding: 62px 96px;
        border: 1px solid #1f66ff;
    }
}
</style>
