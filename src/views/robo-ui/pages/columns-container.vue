<template>
    <div class="page-container">
        <el-card class="page-title">适用于系统中大部分新建、编辑中的2栏布局</el-card>
        <el-card
            header="正常顺序（默认），default slot 传入主题标题，main-header slot 传入主体标题，aside slot 传入侧边栏内容 aside-header slot传入侧边栏标题"
        >
            <robo-columns-container>
                <span slot="main-header">编辑车辆信息</span>
                <div class="inside-container">
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
                <span slot="aside-header">操作区域</span>
                <div slot="aside">
                    <el-button type="primary" class="sav-btn">保存</el-button>
                    <el-button class="cancel-btn">无效</el-button>
                </div>
            </robo-columns-container>
            <code-example :code="code1" />
        </el-card>
        <el-card header="反向顺序：当侧边栏在左侧时，可以传入 revert 为 true 调整顺序">
            <robo-columns-container main-title="编辑车辆信息" aside-title="操作区域" :revert="true">
                <span slot="main-header">编辑车辆信息</span>
                <div class="inside-container">
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
                <span slot="aside-header">操作区域</span>
                <div slot="aside">
                    <el-button type="primary" class="sav-btn">保存</el-button>
                    <el-button class="cancel-btn">无效</el-button>
                </div>
            </robo-columns-container>
            <code-example :code="code2" />
        </el-card>
        <el-card
            header="侧边栏模块数：可以为 aside-blocks 传入数字，实现侧边栏多个模块，第一个模块的 slot 名称不变，第二个模块的 slot 为 aside-slot-2"
        >
            <robo-columns-container :aside-blocks="2">
                <span slot="main-header">编辑车辆信息</span>
                <div class="inside-container">
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
                <span slot="aside-header">操作区域</span>
                <div slot="aside">
                    <el-button type="primary" class="sav-btn">保存</el-button>
                    <el-button class="cancel-btn">无效</el-button>
                </div>
                <span slot="aside-header-2">操作区域</span>
                <div slot="aside-2">
                    <el-button type="primary" class="sav-btn">保存</el-button>
                    <el-button class="cancel-btn">无效</el-button>
                </div>
            </robo-columns-container>
            <code-example :code="code3" />
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
            '<robo-columns-container>\n' +
            '    <span slot="main-header">编辑车辆信息</span>\n' +
            '    <div class="inside-container">\n' +
            '        <el-form label-position="top" :model="value">\n' +
            '            <el-form-item label="名称" label-width="80px" required>\n' +
            '                <el-input v-model="value.name" placeholder="请输入"></el-input>\n' +
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
            '                    placeholder="任意时间点"\n' +
            '                ></el-time-picker>\n' +
            '            </el-form-item>\n' +
            '        </el-form>\n' +
            '    </div>\n' +
            '    <p slot="aside-header">操作区域</p>\n' +
            '    <div slot="aside">\n' +
            '        <el-button type="primary" class="sav-btn">保存</el-button>\n' +
            '        <el-button class="cancel-btn">无效</el-button>\n' +
            '    </div>\n' +
            '</robo-columns-container>'
        );
    }

    get code2() {
        return '<robo-columns-container :revert="true" />';
    }

    get code3() {
        return (
            '<robo-columns-container :aside-blocks="2">\n' +
            '    <span slot="main-header">编辑车辆信息</span>\n' +
            '    <div class="inside-container">\n' +
            '        <el-form label-position="top" :model="value">\n' +
            '        </el-form>\n' +
            '    </div>\n' +
            '    <span slot="aside-header">操作区域</span>\n' +
            '    <div slot="aside">\n' +
            '        <el-button type="primary" class="sav-btn">保存</el-button>\n' +
            '        <el-button class="cancel-btn">无效</el-button>\n' +
            '    </div>\n' +
            '    <span slot="aside-header-2">操作区域</span>\n' +
            '    <div slot="aside-2">\n' +
            '        <el-button type="primary" class="sav-btn">保存</el-button>\n' +
            '        <el-button class="cancel-btn">无效</el-button>\n' +
            '    </div>\n' +
            '</robo-columns-container>'
        );
    }
}
</script>

<style scoped lang="scss">
.page-container {
    .inside-container {
        padding: 32px 96px 64px;
    }

    ::v-deep {
        .el-card {
            .el-card__body {
                background: #f0f2f5;
            }

            &.code-card .el-card__body {
                background: #fff;
            }
        }
    }
}
</style>
