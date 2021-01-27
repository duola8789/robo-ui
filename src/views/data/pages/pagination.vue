<template>
    <div class="page-container">
        <el-card header="带有背景色的分页：注意不要设置 background 属性">
            <el-pagination layout="total, prev, pager, next, sizes" :total="1000"></el-pagination>
            <code-example :code="code1" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
    get code1() {
        return '<el-pagination layout="total, prev, pager, next, sizes" :total="1000"></el-pagination>';
    }
}
</script>
