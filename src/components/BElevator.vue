<template>
    <div id="elevator" class="elevator">
        <div class="ear"></div>
        <div id="cover">
        </div>
        <!--列表-->
        <div id="lb" class="list-box">
            <div data-ins=1 class="item sortable " @click="scrollToTarget('.anime')">
                动漫
            </div>
            <div data-ins=2 class="item sortable " @click="scrollToTarget('.rotate')">
                播出表
            </div>
            <div data-ins=3 class="item sortable " @click="scrollToTarget('.movie')">
                电影
            </div>
            <div data-ins=4 class="item sortable " @click="scrollToTarget('.variety')">
                综艺
            </div>
            <div data-ins=5 class="item sortable " @click="scrollToTarget('.tv')">
                电视剧
            </div>
            <div data-ins=6 class="item sortable " @click="scrollToTarget('.pictures')">
                图片
            </div>
        </div>
        <!-- <div id="ontuo" class="sort">
            <svg id="sele" width="16px" height="16px" t="1589190207425" class="ssg" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="6126">
                <path
                    d="M982.298495 280.740233L731.035986 32.986977a79.309116 79.309116 0 0 0-134.755312 56.148047v864.679918a70.185058 70.185058 0 0 0 140.370117 0V237.225497l145.984921 145.984921A70.185058 70.185058 0 0 0 982.298495 280.740233zM356.247775 0a70.185058 70.185058 0 0 0-70.185058 70.185058v717.291296L140.077796 641.491432a70.185058 70.185058 0 0 0-99.662783 0 70.185058 70.185058 0 0 0 0 98.960933l251.262509 250.560658a76.501714 76.501714 0 0 0 55.446196 23.161069 74.396162 74.396162 0 0 0 30.179575-5.614805 79.309116 79.309116 0 0 0 49.12954-70.185058V70.185058a70.185058 70.185058 0 0 0-70.185058-70.185058z"
                    fill="#999999" p-id="6127"></path>
            </svg>
        </div> -->
        <div class="back-top" @click="backTop">
            <svg width="22px" height="26px" t="1589190803074" class="ssg" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="7224">
                <path
                    d="M904 692c0 8.189-3.124 16.379-9.372 22.628-12.497 12.496-32.759 12.496-45.256 0L512 377.255 174.628 714.628c-12.497 12.496-32.758 12.496-45.255 0-12.497-12.498-12.497-32.758 0-45.256l360-360c12.497-12.496 32.758-12.496 45.255 0l360 360C900.876 675.621 904 683.811 904 692z"
                    p-id="7225" fill="#999999"></path>
            </svg>
        </div>
        <div id="bg233" class="bg23">
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
const backTop = () => {
    let top = document.documentElement.scrollTop//获取点击时页面的滚动条纵坐标位置
    const timeTop = setInterval(() => {
        document.documentElement.scrollTop = top -= 50//一次减50往上滑动
        if (top <= 0) {
            clearInterval(timeTop)
        }
    }, 5)//定时调用函数使其更顺滑
}

const scrollToTarget = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleScroll = () => {
    if (document.documentElement.scrollTop > 20) {
        //往下滑超过20则显示 否则则不显示按钮
    } else { }

}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})//监听滚动事件
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})//离开页面时移除监听事件

</script>

<style scoped lang='less'>
.elevator {
    position: fixed;
    left: calc(80% - 30px);
    top: 265px;
    margin-left: 180px;
    z-index: 1001;

    .ear {
        width: 50px;
        height: 13px;
        margin-left: 3px;
        background-image: url(../assets/img/ear.png);
    }

    #cover {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgba(0, 0, 0, .5);
        background: #000;
        position: absolute;
        filter: alpha(opacity=30);
        z-index: 2;
        display: none;
    }

    .list-box {
        width: 54px;
        height: 581x;

        display: block;
        padding-top: 6px;
        position: relative;
        background: #fff;
        border: 1px solid #e7e7e7;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: 1001;

        .item {

            width: 54px;
            height: 24px;
            font-size: 12px;
            line-height: 24px;
            text-align: center;
            cursor: pointer;
            transition: all .1s;
            padding-bottom: 20px;
            user-select: none;
            margin: 0;
        }

        .sortable:hover {
            cursor: pointer;
            color: #fff;
            background-color: #06A3D7;
        }
    }

    .sort {
        padding-top: 7px;
        width: 56px;
        height: 25px;
        border: 1px solid #e7e7e7;
        text-align: center;
        border-bottom: 1px solid #dbdbdb;
        border-top: 1px solid #dbdbdb;
        background-color: #fff;
        z-index: 1001;
        transition: all .2s;

        &:hover {
            cursor: pointer;
            background-color: #06A3D7;

            .ssg path {
                fill: #fff;
            }
        }
    }

    .back-top {
        padding-top: 2px;
        width: 56px;
        height: 32px;
        text-align: center;
        border: 1px solid #e7e7e7;
        background-color: #fff;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        z-index: 1001;
        transition: all .2s;

        &:hover {
            cursor: pointer;
            background-color: #06A3D7;

            .ssg path {
                fill: #fff;
            }
        }
    }

    .bg23 {
        display: none;
        position: absolute;
        width: 130px;
        height: 100%;
        top: -20px;
        right: -15px;
        background-color: hsla(0, 0%, 100%, .8);
        padding: 40px;
        box-sizing: content-box;
        z-index: -1;
        border-radius: 2px;
        background-image: url(https://s1.hdslb.com/bfs/static/jinkela/home/asserts/tab2233.png);
        background-repeat: no-repeat;
        background-position: 16px 20px;
    }

}
</style>