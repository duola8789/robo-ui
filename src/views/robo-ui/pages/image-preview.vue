<template>
    <div class="page-container">
        <el-card header="传入 visible 和 preview-list 来实现全屏状态下的图片查看">
            <el-button type="primary" @click="visible1 = true">Preview</el-button>
            <robo-image-preview :visible.sync="visible1" :preview-list="previewList" />
            <code-example :code="code1" />
        </el-card>
        <el-card header="可以为 init-index 传入一个正整数，来指定从第几张图片开始预览">
            <el-button type="primary" @click="visible2 = true">Preview</el-button>
            <robo-image-preview :visible.sync="visible2" :preview-list="previewList" :init-index="1" />
            <code-example :code="code2" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ImageView extends Vue {
    visible1 = false;
    visible2 = false;

    previewList = [
        {src: '//image.oldzhou.cn/FndrJGQ4NBNSJ_-cA62phLG8hxcI', name: '第一张', title: '我曾难自拔于世界之大'},
        {src: '//image.oldzhou.cn/FlpN62CIg92QlU9Q9v72ALydCAkK', name: '第二张', title: '也沉溺于其中梦话'},
        {src: '//image.oldzhou.cn/FgqJHCqAN7ZtD4I6GJXLc0M4ye1l', name: '第三张', title: '不得真假 不做挣扎 不惧笑话'}
    ];

    get code1() {
        return [
            '<button @click="visible1 = true">Preview</button>',
            '<robo-image-preview :visibe.sync="visible1" :preview-list="previewList1" />',
            'previewList = [\n' +
                "    {src: '//image.oldzhou.cn/FndrJGQ4NBNSJ_-cA62phLG8hxcI', name: '第一张', title: '我曾难自拔于世界之大'},\n" +
                "    {src: '//image.oldzhou.cn/FlpN62CIg92QlU9Q9v72ALydCAkK', name: '第二张', title: '也沉溺于其中梦话'},\n" +
                "    {src: '//image.oldzhou.cn/FgqJHCqAN7ZtD4I6GJXLc0M4ye1l', name: '第三张', title: '不得真假 不做挣扎 不惧笑话'}\n" +
                '];\n'
        ];
    }

    get code2() {
        return [
            '<button @click="visible2 = true">Preview</button>',
            '<robo-image-preview :visibe.sync="visible2" :preview-list="previewList1" :init-index="1" />',
            'previewList = [\n' +
                "    {src: '//image.oldzhou.cn/FndrJGQ4NBNSJ_-cA62phLG8hxcI', name: '第一张', title: '我曾难自拔于世界之大'},\n" +
                "    {src: '//image.oldzhou.cn/FlpN62CIg92QlU9Q9v72ALydCAkK', name: '第二张', title: '也沉溺于其中梦话'},\n" +
                "    {src: '//image.oldzhou.cn/FgqJHCqAN7ZtD4I6GJXLc0M4ye1l', name: '第三张', title: '不得真假 不做挣扎 不惧笑话'}\n" +
                '];\n'
        ];
    }
}
</script>

<style scoped lang="scss">
.page-container {
    ::v-deep .robo-tag {
        margin-right: 16px;
    }
}
</style>
