<template>
    <div class="error-page">
        <MiniHeader></MiniHeader>
        <div class="error-container">
            <div class="error-panel server-error error-404">
                <img src="//static.hdslb.com/error/very_sorry.png">
                <div style="text-align: center; padding: 0 0 40px 0;">
                    <a class="rollback-btn" style="padding: 0 20px; float: none;" @click="rollback">返回上一页</a>
                </div>
            </div>
            <div class="error-split" id="up">
            </div>
            <div class="error-manga">
                <img :src="imgUrl">
                <a class="change-img-btn" @click="changeImg">换一张</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import MiniHeader from '../components/MiniHeader.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const imgLists = ["/src/assets/img/404/404_1.png", "/src/assets/img/404/404_2.png", "/src/assets/img/404/404_3.png", "/src/assets/img/404/404_4.png", "/src/assets/img/404/404_5.png",
    "/src/assets/img/404/404_6.png", "/src/assets/img/404/404_7.png", "/src/assets/img/404/404_8.png", "/src/assets/img/404/404_9.png", "/src/assets/img/404/404_10.png"]

let imgUrl = ref("/src/assets/img/404/404_1.png");
const router = useRouter()
function changeImg() {
    imgUrl.value = imgLists[Math.floor(Math.random() * imgLists.length)];
}
function rollback(){
    router.go(-1)
}

</script>

<style scoped lang='less'>
.error-page {
    width: 100%;
    height: 1700px;
    background-color: #f4f5f7;
}

.error-container {
    width: 980px;
    margin: 30px auto 30px;
    background: #fff;
    border-radius: 10px;

    .error-panel {
        overflow: hidden;

        .rollback-btn {
            display: inline-block;
            line-height: 40px;
            vertical-align: middle;
            text-align: center;
            background: #00a1d6;
            color: #fff;
            border-radius: 4px;
            float: right;
            font-size: 16px;
            transition: 0.2s;
            cursor: pointer;
        }
    }

    .error-split {
        width: 100%;
        height: 40px;
        background: url('../assets/img/have_rest.png') center no-repeat;
    }

    .error-manga {
        padding: 30px;
        text-align: center;

        img {
            max-width: 800px;
        }

        .change-img-btn {
            display: block;
            height: 48px;
            width: 150px;
            margin: 30px auto 0;
            line-height: 48px;
            vertical-align: middle;
            text-align: center;
            font-size: 16px;
            background: #00a1d6;
            color: #fff;
            border-radius: 4px;
            transition: 0.2s;
        }
    }
}
</style>