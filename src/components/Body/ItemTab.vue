<template>
    <div class="live-tabs" style="width: 320px;height: 456px; position: absolute;right: 0;top: 0; display: flex;">
        <div class="tab-switch" style="display:block;">
            <div style="display: flex;">
                <div class="tab-switch-item" style="font-size: 20px;">排行榜</div>
                <a class="btn more"
                    style=" align-items: center;cursor: pointer;height: 22px;text-align: center;border: 1px solid silver;border-radius: 2px;font-size: 12px;color: #505050;transition: all .2s;line-height: 22px;width: 58px;color: #505050;display: flex;margin-left: 170px;">
                    <p style="display: block; font-size: 12px; width: 25px;margin-left: 10px;">
                        更多
                    </p>
                    <svg width="16px" height="16px" style="display: block;" t="1589294241068" class="icon"
                        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1663">
                        <path
                            d="M320 828.8L636.16 512 320 195.2a32 32 0 1 1 45.44-45.44L704 489.6a32 32 0 0 1 0 45.44l-339.2 339.2a32 32 0 0 1-44.8-45.44z"
                            p-id="1664" fill="#505050"></path>
                    </svg>
                </a>
            </div>
            <div class="rank-wrap" style="display: flex; margin-top: 20px;" v-for="(item, index) in tabs.data">
                <span class="number no"
                    style="font-size: 14px;color: #999999;margin-right: 10px;width: 18px;height: 18px;text-align: center;line-height: 18px;border-radius: 2px;display: block;">
                    {{ index + 1 }}</span>
                <a style="line-height: 20px; " class="link" @click="gotoPlayer(item.id)">
                    <p class="title">{{ item.name }}</p>
                </a>
                <div class="popover-video-card pvc"
                    style="position: absolute;padding: 12px;width: 320px;background: #fff;box-shadow: 0 1px 6px 0 rgba(0,0,0,.2);border-radius: 2px;z-index: 200; margin-top: 20px;">
                    <div class="content" style="display: flex;">
                        <img style="width: 112px;height: 63px;border-radius: 2px;" :src="item.cover" alt="">
                        <div class="info" style="padding-left: 10px;margin-top: 10px;">
                            <p class="f-title"
                                style="max-height: 40px;color: #212121;font-size: 14px;font-weight: 700;line-height: 20px;margin-bottom: 8px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                                {{ item.name }}
                            </p>
                            <p class="subtitle" style="display: flex;color: #999;font-size: 12px;line-height: 16px;">
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
</script>

<style scoped lang='less'>
.link {
    cursor: pointer;
}


.icon {
    fill: #999999;
}

.btn:hover {
    background-color: #f4f4f4;
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

#bili_anime_list .tab-switch-item {
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    margin-right: 24px;
    cursor: pointer;
}

#bili_anime_list .tab-switch-item.on {
    border-bottom: 1px solid #00a1d6;
    color: #00a1d6;
}


.tab-switch .item:before {
    position: absolute;
    top: 140px;
    left: 0;
    width: 100%;
    height: 48px;
    border-radius: 2px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
    content: "";
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

#bili_manga .tab-switch .item:before {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    height: 48px;
    border-radius: 2px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
    content: "";
}

#bili_comic .btn {
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    height: 22px;
    text-align: center;
    border: 1px solid silver;
    border-radius: 2px;
    font-size: 12px;
    color: #505050;
    transition: all .2s;
    line-height: 22px;
}

#bili_dance .btn {
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    height: 22px;
    text-align: center;
    border: 1px solid silver;
    border-radius: 2px;
    font-size: 12px;
    color: #505050;
    transition: all .2s;
    line-height: 22px;
}

.storey-title {
    .tab-switch-item {
        font-size: 14px;
        line-height: 30px;
        height: 30px;
        margin-right: 24px;
        cursor: pointer;
    }

    .tab-switch-item.on {
        border-bottom: 1px solid #00a1d6;
        color: #00a1d6;
    }

    .name {
        margin: 0 20px 0 0;
        vertical-align: bottom;
        font-size: 20px;
        line-height: 36px;
    }
}
</style>