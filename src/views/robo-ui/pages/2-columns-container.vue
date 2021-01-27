<template>
    <div class="page-container">
        <el-card class="page-title">
            适用于系统中大部分新建、编辑布局，默认的 slot 为主体内容，命名为 aside 的 slot 为侧栏内容
        </el-card>
        <el-card header="正常顺序（默认），可通过 main-title 和 aside-title 属性分别添加标题">
            <robo2-columns-container main-title="编辑车辆信息">
                <div class="inside-container">
                    <el-form label-position="top" :model="value">
                        <el-form-item label="名称" label-width="80px" required>
                            <el-input v-model="value.name" placehloder="请输入"></el-input>
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
                    </el-form>
                </div>
                <div slot="aside">
                    <el-button type="primary" class="sav-btn">保存</el-button>
                    <el-button class="cancel-btn">无效</el-button>
                </div>
            </robo2-columns-container>
            <code-example :code="code1" />
        </el-card>
        <el-card header="反向顺序：当侧边栏在左侧时，可以传入 revert 为 true 调整顺序">
            <robo2-columns-container main-title="编辑车辆信息" aside-title="操作区域" :revert="true">
                <div class="inside-container">
                    <el-form label-position="top" :model="value">
                        <el-form-item label="名称" label-width="80px" required>
                            <el-input v-model="value.name" placehloder="请输入"></el-input>
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
                    </el-form>
                </div>
                <div slot="aside">
                    <el-button type="primary" class="sav-btn">保存</el-button>
                    <el-button class="cancel-btn">无效</el-button>
                </div>
            </robo2-columns-container>
            <code-example :code="code2" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ColumnsContainer extends Vue {
    value = {
        name: '',
        region: '',
        type: '',
        date: '',
        time: '',
        dateRange: []
    };

    get code1() {
        return (
            '<robo2-columns-container main-title="编辑车辆信息">\n' +
            '    <div class="inside-container">\n' +
            '        <el-form label-position="top" :model="value">\n' +
            '            <el-form-item label="名称" label-width="80px" required>\n' +
            '                <el-input v-model="value.name" placehloder="请输入"></el-input>\n' +
            '            </el-form-item>\n' +
            '            <el-form-item label="活动区域">\n' +
            '                <el-select v-model="value.region" placeholder="活动区域">\n' +
            '                    <el-option label="区域一" value="shanghai"></el-option>\n' +
            '                    <el-option label="区域二" value="beijing"></el-option>\n' +
            '                </el-select>\n' +
            '            </el-form-item>\n' +
            '            <el-form-item label="活动形式">\n' +
            '                <el-input v-model="value.type"></el-input>\n' +
            '            </el-form-item>\n' +
            '            <el-form-item label="日期">\n' +
            '                <el-date-picker v-model="value.date" type="date" placeholder="选择日期"></el-date-picker>\n' +
            '            </el-form-item>\n' +
            '            <el-form-item label="日期范围" class="date-range-item">\n' +
            '                <el-date-picker v-model="value.dateRange" type="daterange"></el-date-picker>\n' +
            '            </el-form-item>\n' +
            '            <el-form-item label="时间">\n' +
            '                <el-time-picker\n' +
            '                    v-model="value.time"\n' +
            '                    :picker-options="{\n' +
            "                                    selectableRange: '18:30:00 - 20:30:00'\n" +
            '                                }"\n' +
            '                    placeholder="任意时间点"\n' +
            '                ></el-time-picker>\n' +
            '            </el-form-item>\n' +
            '        </el-form>\n' +
            '    </div>\n' +
            '    <div slot="aside">\n' +
            '        <el-button type="primary" class="sav-btn">保存</el-button>\n' +
            '        <el-button class="cancel-btn">无效</el-button>\n' +
            '    </div>\n' +
            '</robo2-columns-container>\n'
        );
    }

    get code2() {
        return '<robo2-columns-container main-title="编辑车辆信息" aside-title="操作区域" :revert="true" />';
    }
}
</script>

<style scoped lang="scss">
.page-container {
    .sav-btn {
        width: 100%;
        margin-bottom: 16px;
    }

    .cancel-btn {
        margin-left: 0;
        width: 100%;
    }

    .inside-container {
        padding: 32px 96px 64px;
    }

    ::v-deep {
        .el-card__body {
            background: #f0f2f5;
        }
    }
}
</style>
