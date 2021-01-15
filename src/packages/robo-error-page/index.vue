<template>
    <div class="robo-403-404">
        <div class="image" :class="'image-' + pageType"></div>
        <div class="text-block">
            <p class="title">{{ pageTitle }}</p>
            <p class="info">如有疑问，请联系管理员</p>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboErrorPage extends Vue {
    @Prop({type: String}) type!: '403' | '404';

    get pageType() {
        if (this.type) {
            return this.type;
        }
        if (!this.$route) {
            return '404';
        }
        return this.$route.path === '/403' ? '403' : '404';
    }

    get pageTitle() {
        return this.pageType === '404' ? '页面不存在' : '暂无权限访问此页面';
    }
}
</script>
