
<template>
  <div class="b-player">
    <h1 class="title">{{ videoInfo.name }}</h1>
    <div class="year">年份:{{ videoInfo.year }}</div>
    <div class="area">地区:{{ videoInfo.area }}</div>
    <vue3VideoPlay v-bind="options" :autoPlay="false" />
    <div class="content">
      <div class="detail">
        {{ videoInfo.description }}
      </div>
      <ul class="tag-area">
        <li v-for="tag in videoInfo.tag.split(',')" class="tag" style="">
          <a class="tag-link">{{ tag }}
          </a>
        </li>
      </ul>
    </div>
    <div class="play-list">
      <div class="list">
        播放列表
      </div>
      <div data-v-bbdf5ded="" class="el-tabs el-tabs--top demo-tabs">
        <div class="el-tabs__content">
          <div>
            <div id="pane-1" class="el-tab-pane" role="tabpanel" aria-hidden="false" aria-labelledby="tab-1" style="">
              <ul class="playlist">
                <li class="episodes" @click="playUrl(i)" v-for="i in videoInfo.episodes"><a>第{{ i }}集</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
     
<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import api from '@/api/video.js'

let videoInfo = reactive({
  name: '',
  year: 0,
  area: "",
  description: "",
  episodes: 0,
  tag: ""
})
let videoUrl = reactive({ episodes: [], url: [] })
const route = useRoute()
let options = reactive({
  width: "1244px", //播放器高度
  height: "750px", //播放器高度
  color: "#409eff", //主题色
  title: "", //视频名称
  src: "", //视频源
  type: "m3u8",
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
const getVideoUrl = () => {
  api.getVideoUrl(route.query).then((res) => {
    if (res.code === 0) {
      for (let i = 0; i < res.data.length; i++) {
        videoUrl.episodes.push(res.data[i].episodes)
        videoUrl.url.push(res.data[i].url)
      }
      options.src = videoUrl.url[0]
    }
  }).catch(error => {
    console.log(error);
  })
}

const getVideoInfo = () => {
  api.getVideoInfo(route.query).then((res) => {
    if (res.code === 0) {
      videoInfo.name = res.results.name
      videoInfo.year = res.results.year
      videoInfo.area = res.results.area
      videoInfo.description = res.results.description
      videoInfo.episodes = res.results.episodes
      videoInfo.tag = res.results.tag
    }
  }).catch(error => {
    console.log(error);
  })
}

const playUrl = (i) => {
  const index = videoUrl.episodes.indexOf(i)
  options.src = videoUrl.url[index]
}

const download = (episode) => {
  const form = {
    episode: episode,
    video_id: route.query
  }
  api.getVideoInfo(form).then((res) => {
    if (res.code === 0) {
      
    }
  }).catch(error => {
    console.log(error);
  })
}
onMounted(() => {
  getVideoInfo()
  getVideoUrl()
})
</script>
     
<style lang='less' scoped>
.episodes:hover {
  cursor: pointer;
}

.year,
.area {
  font-size: 13px;
  width: fit-content;
  font-weight: 400;
  color: #61666D;
  margin-bottom: 5px;
  margin-left: 10px;
}

.b-player {
  width: 1244px;
}

.title {
  margin-left: 10px;
  line-height: 60px;
}

.content {
  margin-top: 20px;
  width: 1244px;
  position: absolute;
  transition: height 0.3s;
  border-bottom: 1px solid #d0d0d5;
  border-top: 1px solid #d0d0d5;

  .detail {
    margin-top: 15px;
    position: relative;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    white-space: pre-line;
    word-break: break-all;
    color: var(--text1);
    letter-spacing: 0;
    overflow: hidden;
    height: 54px;
  }

  .tag-area {
    position: relative;
    margin-top: 15px;
    margin-bottom: 12px;

    &>li {
      float: left;
      margin: 0 12px 8px 0;
      position: relative;

      .tag-link {
        max-width: 307px;
        display: flex;
        align-items: center;
        fill: #61666D;
        cursor: pointer;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #61666D;
        padding: 0 12px;
        box-sizing: border-box;
        background: #F1F2F3;
        border-radius: 100px;
        transition: all 0.3s;
      }
    }
  }
}

a {
  touch-action: manipulation;
  text-decoration: none;
  outline: none;
}

.play-list {
  margin-top: 180px;

  .list {
    font-size: medium;
    font-weight: 400;
    line-height: 20px;
  }
}

.playlist {
  li {
    float: left;
    text-align: center;
    width: 110px;
    margin: 10px 10px 0 0;

    a {
      display: block;
      height: 32px;
      line-height: 32px;
      border: 1px solid #dfdfdf;
      color: #0785d4;
      overflow: hidden;

      &:link {
        text-decoration: none;
      }
    }
  }
}
</style>