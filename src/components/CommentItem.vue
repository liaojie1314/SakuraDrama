<template>
    <div class="comment">
        <div class="comment_left">
            <div class="block">
                <el-avatar :size="48" :src="cover"></el-avatar>
            </div>
        </div>
        <div class="comment_right">
            <div class="right_name">
                {{ comments.nickname }}
            </div>
            <p class="right_content">
                {{ comments.content }}
            </p>
            <div class="right_other">
                <span class="other_time">
                    {{ comments.createTime }}
                </span>
                <span class="other_likeNumber">
                    <i class="iconfont icon-31dianzan"></i>
                    {{ comments.commitLikeCount }}
                </span>
                <!--<span class="other_revertNumber">
            回复
          </span>-->
            </div>
            <div class="replay_box">
                <div v-for="(item, index) in replayList">
                    <div class="replay-item" v-if="index < showTotal || showMore">
                        <div class="item-left">
                            <div class="block">
                                <el-avatar :size="24" :src="cover"></el-avatar>
                            </div>
                        </div>
                        <div class="item-right">
                            <div class="right-top">
                                <div class="item-right-name">
                                    {{ item.nickname }}
                                </div>
                                <span class="text-con">
                                    {{ item.content }}
                                </span>
                            </div>
                            <div class="right-bottom">
                                <div class="right_other">
                                    <span class="other_time">
                                        {{ item.createTime }}
                                    </span>
                                    <span class="other_likeNumber">
                                        <i class="iconfont icon-31dianzan"></i>
                                        {{ item.commitLikeCount }}
                                    </span>
                                    <!--<span class="other_revertNumber">
                    回复
                  </span>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="total > showTotal && !showMore" class="view-more">
                    共<b>{{ total }}</b>条回复,
                    <el-button class="btn-more" size="mini" type="text" @click="viewMore">点击查看</el-button>
                </div>
            </div>
            <div v-if="showMore" class="paging-box">
                <el-pagination :current-page.sync="queryData.pagenum" :small="true" :total="total"
                    layout="total, prev, pager, next" next-text="下一页" prev-text="上一页" @current-change="handleCurrent">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
  
<script>
import api from '@/api/video.js'
export default {
    name: "CommentItem",
    props: {
        comments: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            cover: "/src/assets/img/head.webp",
            showMore: false,//显示跟多回复
            showTotal: 3,//默认显示条数
            replayList: [],
            queryData: {
                videoCommentid: this.comments.id,
                pagenum: 1,
                pagesize: 10,
            },
            total: null,
        }
    },
    methods: {
        /*获取跟多评论的回复*/
        viewMore() {
            this.showMore = true
        },
        getCommentReply() {
            api.getComment2(this.queryData).then(res => {
                if (res.code == 0) {
                    this.replayList = res.rows
                    this.total = res.total
                }
            }).catch(error => {
                console.log(error);
            })
        },
        handleCurrent(value) {
            this.queryData.pagenum = value
            this.getCommentReply()
        }
    },
    watch: {
        "comments.id"(newVal) {
            this.queryData.videoCommentid = newVal
            this.getCommentReply()
        }
    },
    created() {
        this.getCommentReply()
    }
}
</script>
  
<style lang="less" scoped>
.comment {
    display: flex;

    .comment_left {
        margin: 24px 0 0 0px;
    }

    .comment_right {
        flex: 1;
        margin: 0 20px;
        border-top: 1px solid #e5e9ef;
        padding: 22px 0 14px 0;

        .right_name {
            font-size: 12px;
            color: #6D757A;
            font-weight: bold;
            line-height: 18px;
            padding-bottom: 4px;
            display: block;
            word-wrap: break-word;
            position: relative;
        }

        .right_content {
            position: relative;
            line-height: 20px;
            padding: 2px 0;
            font-size: 14px;
            color: #222;
            text-shadow: none;
            overflow: hidden;
            word-wrap: break-word;
            word-break: break-word;
            white-space: pre-wrap;
            margin: 0;
        }

        .right_other {
            color: #99a2aa;
            line-height: 14px;
            margin-top: 6px;
            font-size: 12px;

            display: flex;
            font-family: none;

            .other_time {
                margin-right: 20px;
            }

            .other_likeNumber {
                cursor: pointer;
                margin-right: 20px;
            }

            .other_likeNumber:hover {
                i {
                    color: #1dacdb;
                }
            }

            .other_revertNumber {
                padding: 0 5px;
                border-radius: 4px;
                margin-right: 15px;
                cursor: pointer;
                display: inline-block;
            }

            .other_revertNumber:hover {
                color: #00a1d6;
                background: #e5e9ef;
            }
        }

        .replay_box {
            .view-more {
                font-size: 12px;
                color: #6d757a;
            }

            .replay-item {
                display: flex;
                padding: 10px 0;

                .item-left {
                    display: inline-block;
                    position: relative;
                    margin-right: 10px;
                    vertical-align: top;
                }

                .item-right {
                    display: flex;
                    flex-direction: column;
                    flex: 1;

                    .right-top {
                        display: flex;
                        font-size: 12px;
                        font-weight: bold;
                        line-height: 18px;
                        padding-bottom: 4px;
                        word-wrap: break-word;
                        position: relative;
                    }

                    .right-bottom {}

                    .item-right-name {
                        color: #6d757a;
                        position: relative;
                        top: 2px;
                    }

                    .text-con {
                        font-weight: normal;
                        font-size: 13px;
                        color: #222;
                        line-height: 20px;
                        white-space: pre-wrap;
                        margin-left: 14px;
                        flex: 1;

                        button {
                            padding: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
<style>
.el-button {
    font-size: 12px;
    margin-bottom: 4px;
}
</style>
  
  