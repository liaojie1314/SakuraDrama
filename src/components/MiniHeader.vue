<template>
    <div class="mini-header">
        <div class="mini-header-content ">
            <div class="nav-link">
                <ul class="nav-link-ul">
                    <li class="nav-link-item">
                        <a class="link" href="/home">
                            <svg height="20" width="24" t="1589083525344" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="576" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path
                                    d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z"
                                    p-id="577" fill="#ffffff"></path>
                            </svg>
                            主站</a>
                    </li>
                    <li id="fj" class="nav-link-item"><a class="link">动漫</a></li>
                    <li id="yxzx" class="nav-link-item">
                        <a class="link">电影</a>
                    </li>
                    <li id="zb" class="nav-link-item">
                        <a class="link">电视剧</a>
                    </li>
                    <li id="hyg" class="nav-link-item"><a class="link">会员购</a></li>
                    <li id="mh" class="nav-link-item"><a class="link">漫画</a></li>
                    <li id="ss" class="nav-link-item"><a class="link">赛事</a></li>
                    <li id="nap" class="nav-link-item"><a
                            style="display: block; height: 30px;width: 30px;cursor: default;"></a></li>
                </ul>
            </div>
            <div class="nav-search-box">
                <el-row class="demo-autocomplete">
                    <el-col>
                        <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" clearable class="inline-input"
                            placeholder="Please Input" @select="handleSelect" @change="handleChange" />
                        <div class="nav-search-but" @click="gotoSearch">
                            <button style="outline: none;">
                                <svg style="margin-top: 8px" height="15" width="15" t="1589096830548" class="icon sear"
                                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34508">
                                    <path
                                        d="M965.844997 881.865839 754.477009 664.678308c50.566676-69.379137 80.548524-155.630546 80.548524-249.027703C835.025533 186.084139 653.937175 0 430.548408 0 207.09722 0 26.008862 186.084139 26.008862 415.650605c0 229.622748 181.089381 415.653675 404.540569 415.653675 73.90522 0 143.193283-20.342304 202.813149-55.973826l218.011292 224.12657c31.629371 32.454156 82.899058 32.454156 114.472148 0C997.480508 967.001845 997.480508 914.321018 965.844997 881.865839zM430.548408 720.473055c-163.835416 0-296.68205-136.462998-296.68205-304.82245 0-168.298054 132.846634-304.823474 296.68205-304.823474 163.80267 0 296.64828 136.52542 296.64828 304.823474C727.196689 584.010057 594.351078 720.473055 430.548408 720.473055z"
                                        p-id="34509"></path>
                                </svg>
                            </button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="nav-user-center">
                <div class="user-con">
                    <div class="name" style="margin-left: 30px;" @click="gotoLogin">
                        <img v-if="!isLoggedIn" src="../assets/img/akari.jpg" class="logout-face">
                        {{ isLoggedIn ? userName : '登录' }}
                    </div>
                    <div v-if="!isLoggedIn" id="zcc" class="item" style="margin-left: 22px;" @click="gotoLogin">
                        <a class="txt name">注册</a>
                    </div>
                    <div v-if="isLoggedIn" id="zcc" class="item" style="margin-left: 22px;" @click="logOff">
                        <a class="txt name">注销</a>
                    </div>
                    <button id="tg" style="position: absolute;right: -35px;cursor: pointer;">投稿</button>
                </div>
            </div>
            <div id="tgg"
                style="width: 304px; position: absolute;  right: 25px; top:60px; background-color:#000; border:2px ; display: none; ">
                <svg height="35px" width="20px" t="1589344086587" style="position: absolute;top:-21px;left: 80%;"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3303">
                    <path d="M27.273 753.613l485.222-484.233 484.233 485.222z" p-id="3304" fill="#ffffff">
                    </path>
                </svg>
            </div>
            <div id="log1" style=" display: none; position: absolute;right: 70px; top: 60px; width: 318px;height:305px; ">
                <svg height="35px" width="20px" t="1589344086587" style="position: absolute;top:-21px;left: 50%;"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3303">
                    <path d="M27.273 753.613l485.222-484.233 484.233 485.222z" p-id="3304" fill="#ffffff">
                    </path>
                </svg>
            </div>
            <ul id="popmargin">
                <div class="pop">
                    <div id="yxzx1"
                        style=" display:none; transform-origin: center top;  position: relative;width: 680px;height: 260px; margin-top: 10px;margin-left: 80px; ">
                        <svg height="35px" width="20px" t="1589344086587" style="position: absolute;top:-21px;left: 10%;"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3303">
                            <path d="M27.273 753.613l485.222-484.233 484.233 485.222z" p-id="3304" fill="#ffffff"></path>
                        </svg>
                    </div>
                    <div id="zb1"
                        style="display: none; transform-origin: center top;  position: relative;width: 528px;height: 266px; margin-top: 10px;margin-left: 145px;">
                        <svg height="35px" width="20px" t="1589344086587" style="position: absolute;top:-21px;left: 10%;"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3303">
                            <path d="M27.273 753.613l485.222-484.233 484.233 485.222z" p-id="3304" fill="#ffffff"></path>
                        </svg>
                    </div>
                    <div id="mh1"
                        style="display: none; transform-origin: center top;position: relative;width: 528px;height: 266px; margin-top: 10px;margin-left: 240px;">
                        <svg height="35px" width="20px" t="1589344086587" style="position: absolute;top:-21px;left: 10%;"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3303">
                            <path d="M27.273 753.613l485.222-484.233 484.233 485.222z" p-id="3304" fill="#ffffff"></path>
                        </svg>
                    </div>
                    <div id="ap1"
                        style="display: none; transform-origin: center top;  position: relative;width: 280px;height: 212px; margin-top: 10px;margin-left: 270px;">
                        <svg height="35px" width="20px" t="1589344086587" style="position: absolute;top:-18px;left: 43%;"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3303">
                            <path d="M27.273 753.613l485.222-484.233 484.233 485.222z" p-id="3304" fill="#ffffff"></path>
                        </svg>
                    </div>
                </div>
            </ul>
        </div>
    </div>
    <div class="bili-banner">
        <img src="../assets/img/bilibili-banner.png" alt="">
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/state';
import api from '@/api/home.js'
const authStore = useAuthStore()

const isLoggedIn = authStore.isLoggedIn
const userName = authStore.userName
const historyForm = {
    user_id: authStore.userId
}
const state1 = ref('')
let msg = ref('')
const router = useRouter()
const restaurants = ref([])
const querySearch = (queryString, cb) => {
    const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
    cb(results)
}
const createFilter = (queryString) => {
    return (restaurant) => {
        return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
    }
}

const handleChange = (value) => {
    msg = value
}

const handleSelect = (item) => {
    msg = item.value
}

const logOff = () => {
    authStore.logout()

}
function gotoLogin() {
    if (!isLoggedIn) {
        router.push('/login')
    }
}

function gotoSearch() {
    router.push({
        name: 'search',
        query: {
            msg,
            user_id: authStore.userId
        }
    })
}

const getHistory = () => {
    api.getHistory(historyForm).then((res) => {
        if (res.code == 0) {
            console.log(res.data);
            restaurants.value = res.data
        }
    })
}

onMounted(() => {
    getHistory()
})
</script>

<style scoped lang='less'>
.bili-banner {
    margin: 0 auto;
    position: relative;
    z-index: 0;
    min-height: 155px;
    height: 9.375vw;
    min-width: 999px;
    background-color: #f9f9f9;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: cover;
    box-shadow: 0px 30px 50px 10px #00000087 inset;
}

.mini-header {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 155px;
}

.mini-header-content {
    box-sizing: border-box;
    line-height: 30px;
    position: relative;
    margin: 0 auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.nav-link .nav-link-ul .nav-link-item {
    svg {
        margin-top: 4px;
    }

    .link {
        font-size: 14px;
        color: #fff;
        text-shadow: 0 1px 1px rgba(0, 0, 0, .3);
        display: inline-block;
        white-space: nowrap;
        display: -ms-flexbox;
        display: flex;
    }

}

.nav-link-ul {
    position: absolute;
    left: 18px;
}

.nav-link-item {
    margin-left: 10px;
}

.nav-link .nav-link-ul {
    height: 36px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}

.demo-autocomplete {
    margin-top: 10px;
    width: 80%;
    height: 100%;
    margin-left: 0;
    display: block;
    /*border: 1px solid hsla(0,0%,100%,0);*/
    border-radius: 2px;
    align-items: center;
}

.nav-search-box .nav-search-but :hover .sear {
    fill: #00A1D6;
}

.nav-search-box {
    width: 498px;
    height: 30px;

    button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        width: 48px;
        height: 30px;
        border: none;
        border-radius: 2px;
        background: #e7e7e7;
        line-height: 26px;
        cursor: pointer;
    }
}

.nav-user-center .user-con .name {
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    display: block;
    cursor: pointer;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .3);
    white-space: nowrap;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 5px;
        border: 1px solid silver;
    }
}

.nav-user-center {
    position: absolute;
    right: 70px;
    top: 10px;
    width: 250px;
    height: 36px;
}

.user-con {
    position: relative;
    display: flex;
    text-align: right;
}

.nav-user-center ul {
    position: absolute;
    top: 5px;
    left: 60px;
    display: inline-block;
    white-space: nowrap;
    display: -ms-flexbox;
    display: flex;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .3);
}

.nav-user-center ul>li {
    margin-left: 10px;
}

.nav-user-center button {
    position: absolute;
    right: 20px;
    top: 0px;
    width: 100px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    background: #fb7299;
    border-radius: 2px;
    border: none;
    outline: none;
}
</style>

<style>
.el-input__wrapper {
    width: 350px;
}

.el-input__inner {
    height: 29px;
}

.el-autocomplete-suggestion__list {
    width: 100%;
}
</style>