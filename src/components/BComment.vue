<template>
  <div class="b-comment">
    <div class="nav-bar">
      <div class="title">
        <span class="title-text">评论</span>
        <span class="total-reply">{{ totalCommentList.total }}</span>
      </div>
      <div
        :class="{
          'nav-sort': true,
          hot: commentStatus[0],
          new: commentStatus[1],
        }"
      >
        <div class="hot-sort" @click="changeStatus(0)">最热</div>
        <div class="part-symbol"></div>
        <div class="time-sort" @click="changeStatus(1)">最新</div>
      </div>
    </div>
    <div class="reply-box">
      <div class="box-normal">
        <div class="reply-box-avatar">
          <div class="bili-avatar" style="width: 48px; height: 48px">
            <img class="bili-avatar-img" alt="" src="../assets/img/head.webp" />
            <span class="bili-avatar-icon"></span>
          </div>
        </div>
        <div class="reply-box-warp">
          <textarea
            class="reply-box-textarea"
            placeholder="只是一直在等你而已，才不是想被评论呢～"
            v-model="postCommentForm.content"
          ></textarea>
        </div>
        <div class="reply-box-send" @click="postComment">
          <div class="send-text">发布</div>
        </div>
      </div>
    </div>

    <div
      style="height: 500px; margin-top: 10px"
      class="commentList"
      v-infinite-scroll="getMore"
      infinite-scroll-immediate="false"
    >
      <div class="container">
        <div v-for="item in commentList.data" class="comment">
          <CommentItem :comments="item"></CommentItem>
        </div>
      </div>
      <div class="noMore" v-if="queryData.pagenum > allPages">没有更多评论</div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from "vue";
import CommentItem from "./CommentItem.vue";
import api from "@/api/video.js";
import { useRoute } from "vue-router";
import util from "../utils/utils";
import { ElMessage } from "element-plus";
import { useAuthStore } from "../stores/state";

const route = useRoute();
const authStore = useAuthStore();
let commentStatus = reactive([true, false]);
let currentInstance = "";
let postCommentForm = reactive({
  user_id: authStore.userId,
  content: "",
  video_id: parseInt(route.query.video_id),
  root_comment_id: 0,
});
let totalCommentList = reactive({ total: 0, hot: [], now: [] }); //评论列表
let commentList = reactive({
  data: [],
});
let queryData = reactive({
  video_id: parseInt(route.query.video_id),
  pagenum: 1,
  pagesize: 10,
  user_id: authStore.userId,
}); //查询评论列表传参
let allPages = ref(1); //评论总页数

/*获取评论列表*/
function getComment() {
  api.getComment1(queryData).then((res) => {
    totalCommentList.total = res.data.total;
    totalCommentList.hot = totalCommentList.hot.concat(res.data.commentsByHot);
    totalCommentList.now = totalCommentList.now.concat(res.data.commentsByTime);
    allPages.value = util.getPageCount(res.total, queryData.pagesize);
    commentList.data = totalCommentList.hot;
  });
}
/*获取更多评论*/
function getMore() {
  queryData.pagenum = queryData.pagenum + 1;
  if (queryData.pagenum > allPages.value) {
  } else {
    getComment();
  }
}

const changeStatus = (status) => {
  if (status == 0) {
    commentStatus[0] = true;
    commentStatus[1] = false;
    commentList.data = totalCommentList.hot;
  } else {
    commentStatus[1] = true;
    commentStatus[0] = false;
    commentList.data = totalCommentList.now;
  }
};
//发表评论
const postComment = () => {
  api
    .postComment(postCommentForm)
    .then((res) => {
      if (res.code === 0) {
        ElMessage.success(res.message);
        postCommentForm.content = "";
        totalCommentList.hot = [];
        totalCommentList.now = [];
        getComment();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getComment();
  currentInstance = getCurrentInstance();
});
</script>

<style scoped lang="less">
.b-comment {
  width: 1244px;

  .nav-bar {
    margin-left: 10px;
    display: flex;
    align-items: center;
    list-style: none;

    .title {
      display: flex;
      align-items: center;
      font-size: 24px;

      .title-text {
        color: #18191c;
        font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue,
          Microsoft YaHei, sans-serif;
        font-weight: 500;
      }

      .total-reply {
        margin: 0 36px 0 6px;
        font-weight: normal;
        color: #9499a0;
        font-size: 14px;
      }
    }

    .nav-sort.hot .hot-sort {
      color: #18191c;
    }

    .nav-sort.new .time-sort {
      color: #18191c;
    }

    .nav-sort {
      font-size: 16px;
      display: flex;
      align-items: center;
      color: #9499a0;

      .hot-sort {
        cursor: pointer;

        &:hover {
          color: #00aeec;
        }
      }

      .time-sort {
        cursor: pointer;

        &:hover {
          color: #00aeec;
        }
      }

      .part-symbol {
        height: 11px;
        margin: 0 12px;
        border-left: solid 1px;
      }
    }
  }

  .reply-box {
    display: flex;
    flex-direction: column;

    .box-normal {
      display: flex;
      height: 50px;
      transition: 0.2s;

      .reply-box-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 50px;

        .bili-avatar {
          display: block;
          position: relative;
          background-image: url(data:image/gif;base64,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);
          background-size: cover;
          border-radius: 50%;
          margin: 0;
          padding: 0;

          * {
            margin: 0;
            padding: 0;
          }

          .bili-avatar-img {
            border: none;
            display: block;
            object-fit: cover;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
          }

          .bili-avatar-icon {
            width: 18px;
            height: 18px;
            bottom: -1px;
            position: absolute;
            right: 0;
            background-size: cover;
          }
        }
      }

      .reply-box-warp {
        position: relative;
        flex: 1;

        .reply-box-textarea {
          width: 100%;
          height: 100%;
          padding: 5px 10px;
          border: 1px solid #f1f2f3;
          border-radius: 6px;
          background-color: #f1f2f3;
          font-family: inherit;
          line-height: 38px;
          color: #18191c;
          resize: none;
          outline: none;
          overflow: auto;
          margin: 0;
          font-size: inherit;
          touch-action: manipulation;
        }
      }

      .reply-box-send {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex-basis: 70px;
        margin-left: 10px;
        border-radius: 4px;
        cursor: pointer;
        background-color: #40c5f1;

        .send-text {
          position: absolute;
          z-index: 1;
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
}

.commentList {
  overflow-y: scroll;
}

.noMore {
  line-height: 64px;
  font-size: 12px;
  color: #99a2aa;
  text-align: center;
  margin: 0 20px 0 66px;
  border-top: 1px solid #e5e9ef;
}

.back-top {
  position: absolute;
  right: 50px;
  bottom: 20px;
  background: #f7f9fa;
  border: 1px solid #e5e9ef;
  border-radius: 3px;
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
  transition: all 0.3s;
  cursor: pointer;
  color: #999;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
}

.back-top:hover {
  background-color: #00a1d6;
  border-color: #00a1d6;
  color: #fff;
}

::-webkit-scrollbar {
  width: 5px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
