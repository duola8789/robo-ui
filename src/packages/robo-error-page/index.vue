<template>
    <div class="robo-error-page">
        <div class="image-block" :class="'image-' + pageType">
            <img class="image" :src="image" alt="" />
        </div>
        <div class="text-block">
            <p class="title">{{ pageTitle }}</p>
            <p class="info">如有疑问，请联系管理员</p>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

import image403 from './images/403.png';
import image404 from './images/404.png';

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

    get image() {
        return this.pageType === '403' ? image403 : image404;
    }

    get pageTitle() {
        return this.pageType === '404' ? '页面不存在' : '暂无权限访问此页面';
    }
}
</script>

<style lang="scss">
.robo-error-page {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1d2127;

    .text-block {
        display: inline-block;

        .title {
            font-size: 32px;
            color: #eceded;
            margin-bottom: 10px;
        }

        .info {
            font-size: 20px;
            color: #bfc7d4;
        }

        @media (max-width: 1280px) {
            .title {
                font-size: 20px;
                color: #eceded;
                margin-bottom: 10px;
            }

            .info {
                font-size: 14px;
                color: #bfc7d4;
            }
        }
    }

    .image-block {
        display: inline-block;
        width: 228px;
        height: 170px;
        margin-right: 16px;

        .image {
            width: 100%;
            max-height: 100%;
        }
    }
}
</style>
