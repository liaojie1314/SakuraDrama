<template>
    <div class="search-view">
        <MiniHeader></MiniHeader>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" @tab-change="handleChange">
            <div v-for="i in 4">
                <el-tab-pane :label="showData[i - 1].name" :name="i">
                    <div style="margin-bottom: 40px;position: relative;">
                        <div class="live-list">
                            <div class="zone-list-box">
                                <div class="live-card" v-for="item in showData[i - 1].data">
                                    <a @click.stop="gotoPlay(item.id)">
                                        <div class="pic">
                                            <img :src="item.cover" alt=""
                                                style=" width: 100%;height: 100%;border-radius:2px;">
                                        </div>
                                        <div class="up">
                                            <div class="txt">
                                                <p class="name">{{ item.name }}</p>
                                                <p class="desc" v-if="item.description">{{ item.description }}</p>
                                                <div v-for="tag in item.tag.split(',')" style="display: inline-block;">
                                                    <div v-if="tag != 'Unknown'" class="tag">{{ tag }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-pagination background layout="prev, pager, next" :hide-on-single-page="true"
                        @current-change="currentChange(i)" :total="showData[i - 1].total" />
                </el-tab-pane>
            </div>
        </el-tabs>
        <BBottom></BBottom>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MiniHeader from '../components/MiniHeader.vue';
import BBottom from '../components/BBottom.vue';
import api from '@/api/search.js'
import util from '@/utils/utils.js'

const activeName = ref(1)
let searchData = reactive([
    {
        name: '动漫',
        data: [],
        total: 0
    }, {
        name: '电影',
        data: [],
        total: 0
    }, {
        name: '综艺',
        data: [],
        total: 0
    }, {
        name: '电视剧',
        data: [],
        total: 0
    }
])
let showData = searchData
if (searchData[0].total > 1) {
    showData[0].data = searchData[0].data.slice(0, 36)
} else {
    showData[0].data = searchData[0].data
}
const route = useRoute()
const router = useRouter()
const searchForm = { msg: route.query.msg, user_id: parseInt(route.query.user_id) }

const search = () => {
    api.searchApi(searchForm).then(res => {
        if (res.code === 0) {
            res.data.forEach(element => {
                if (element.type === '动漫') {
                    searchData[0].data.push(element)
                } else if (element.type === '电影') {
                    searchData[1].data.push(element)
                } else if (element.type === '综艺') {
                    searchData[2].data.push(element)
                } else if (element.type === '电视剧') {
                    searchData[3].data.push(element)
                }
            });
            searchData[0].total = util.getPageCount(searchData[0].data.length, 36) * 10
            searchData[1].total = util.getPageCount(searchData[1].data.length, 36) * 10
            searchData[2].total = util.getPageCount(searchData[2].data.length, 36) * 10
            searchData[3].total = util.getPageCount(searchData[3].data.length, 36) * 10
        }
    }).catch(error => {
        console.log(error);
    })
}

const handleClick = (tab, event) => {
    console.log(tab, event)
}

const handleChange = (name) => {
    if (searchData[name].total > 1) {
        showData[name].data = searchData[name].data.slice(0, 36)
    } else {
        showData[name].data = searchData[name].data
    }
}
const currentChange = (i, value) => {
    if (value < showData[i].total) {
        showData[i - 1].data = searchData[i - 1].data.slice(value * 36, (value + 1) * 36)
    } else {
        showData[i - 1].data = searchData[i - 1].data.slice(value * 36)
    }
}
function gotoPlay(video_id) {
    router.push({
        name: 'video',
        query: {
            video_id
        }
    })
}

onMounted(() => {
    search()
})

</script>

<style scoped lang='less'>
.mini-header {
    position: relative;
}

.demo-tabs {
    margin: 0 auto;
    width: 1800px;
    margin-top: 50px;
    margin-bottom: 20px;
    min-height: 630px;
}

.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.live-list {
    height: fit-content;
    width: 1800px;
}

.zone-list-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}

.live-card {
    width: 274px;
    margin-top: 10px;
    height: 220px;
    margin-left: 13px;
    margin-right: 13px;

    .pic {
        position: relative;
        display: block;
        cursor: pointer;
        margin-bottom: 10px;
        width: 100%;
        height: 154px;

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 48px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAwCAYAAAGnNCAXAAAABGdBTUEAALGPC/xhBQAAAENJREFUCB1jYGBgYGICEpIgQgqNBRRi4MMmARYDyXKAWLwgggfOAnMJiIH0soJ0sMEJdlQWWBYshpAAK0ZwwSzS1AEAes8Ckyqvlc0AAAAASUVORK5CYII=);
            background-repeat: repeat-x;
            bottom: 0;
            left: 0;
            border-radius: 2px;
        }
    }

    .up {
        display: flex;

        .txt {
            p {
                width: 274px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 20px;
            }

            .name {
                font-size: 14px;
                line-height: 20px;
                font-weight: 500;
            }

            .desc {
                font-size: 12px;
                color: #505050;
                line-height: 18px;
                margin-top: 2px;
            }

            .tag {
                font-size: 12px;
                line-height: 14px;
                color: #999;
                margin-top: 2px;
                margin-right: 5px;
            }
        }
    }
}
</style>

<style>
.el-pagination {
    --el-pagination-button-width: 40px;
    --el-pagination-button-height: 40px;
    width: fit-content;
    margin: 0 auto;
}
</style>