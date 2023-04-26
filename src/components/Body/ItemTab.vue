<template>
    <div class="live-tabs" style="width: 320px;height: 456px; position: absolute;right: 0;top: 0; display: flex;">
        <div class="tab-switch" style="display:block;">
            <div style="display: flex;">
                <div class="tab-switch-item" style="font-size: 20px;">排行榜</div>
            </div>
            <div class="rank-wrap" style="display: flex; margin-top: 20px;" v-for="(item, index) in tabs.data">
                <span class="number no"
                    style="font-size: 14px;color: #999999;margin-right: 10px;width: 18px;height: 18px;text-align: center;line-height: 18px;border-radius: 2px;display: block;">
                    {{ index + 1 }}</span>
                <a class="link" @click="gotoPlayer(item.id)">
                    <p>{{ item.name }}</p>
                </a>
                <div class="popover-video-card"
                    style="position: absolute;padding: 12px;width: 320px;background: #fff;box-shadow: 0 1px 6px 0 rgba(0,0,0,.2);border-radius: 2px;z-index: 200; margin-top: 20px;">
                    <div style="display: flex;" @click="gotoPlayer(item.id)">
                        <img style="width: 112px;height: 63px;border-radius: 2px;" :src="item.cover" @error="handleImageError" alt="">
                        <div class="info" style="padding-left: 10px;margin-top: 10px;">
                            <p class="f-title"
                                style="max-height: 40px;color: #212121;font-size: 14px;font-weight: 700;line-height: 20px;margin-bottom: 8px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                                {{ item.name }}
                            </p>
                            <p style="display: flex;color: #999;font-size: 12px;line-height: 16px;">
                                <span class="name"
                                    style="max-width: 86px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
                                    v-for="tag in item.tag.split(',')">
                                    <div v-if="tag != 'Unknown' && tag != null" class="tag">{{ tag }}</div>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
let tabs = reactive()
const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    isPic: {
        type: Boolean,
        default: false
    }
})
tabs = props.data

const router = useRouter()
const gotoPlayer = (video_id) => {
    if (!props.isPic) {
        router.push({
            name: 'video',
            query: {
                video_id
            }
        })
    }
}
function handleImageError(event){
  event.target.src = "/src/assets/img/default.png";
}
</script>

<style scoped lang='less'>
.link {
    line-height: 20px; 
    cursor: pointer;
}

.popover-video-card {
    background-color: #f4f4f4;
}

.rank-wrap:hover .popover-video-card {
    display: block;
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
        /*初始状态 透明度为0*/
    }

    20% {
        opacity: .2;
    }

    50% {
        opacity: .5;
        /*中间状态 透明度为0.5*/
    }

    70% {
        opacity: .7;
    }

    100% {
        opacity: 1;
        /*结尾状态 透明度为1*/
    }
}

.tab-switch-item {
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    margin-right: 24px;
    cursor: pointer;
}

.popover-video-card {
    display: none;
}

.tab-switch .rank-wrap:hover .popover-video-card {
    display: block;
    -webkit-animation-name: fadeIn;
    /*动画名称*/
    -webkit-animation-duration: .3s;
    /*动画持续时间*/
    -webkit-animation-iteration-count: 1;
    /*动画次数*/
    -webkit-animation-delay: 0s;
    /*延迟时间*/
}
</style>