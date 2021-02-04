<template>
    <div class="page-container">
        <el-card header="带有背景色的分页：注意不要设置 background 属性">
            <div class="pagination-container">
                <el-pagination layout="total, prev, pager, next, sizes" :total="1000"></el-pagination>
            </div>
            <code-example :code="code1" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
    get code1() {
        return '<div><el-pagination layout="total, prev, pager, next, sizes" :total="1000"></el-pagination></div>';
    }
}
</script>

<style lang="scss">
.pagination-container {
    padding: 16px;
    border: 1px solid #d1dbe5;
    overflow: hidden;
}
</style>
