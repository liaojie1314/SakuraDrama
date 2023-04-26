<template>
  <div class="live-list" style="height: 456px; width: 854px">
    <header class="storey-title">
      <div class="l-con">
        <slot></slot>
        <a class="name"> {{ list.name }} </a>
      </div>
      <div
        class="exchange-btn"
        style="width: 142px; height: 22px; display: inline-flex"
      >
        <div class="btn btn-change" style="display: flex" @click="changeRandom">
          <svg
            fill="#505050"
            t="1589534605018"
            class="xzsvg"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3722"
            width="16"
            height="16"
          >
            <path
              d="M128 409.6h256c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6H189.44c56.32-120.32 179.2-204.8 322.56-204.8 181.76 0 330.24 133.12 353.28 307.2h51.2c-25.6-202.24-197.12-358.4-407.04-358.4C358.4 102.4 222.72 186.88 153.6 314.88V128c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v256c0 25.6 25.6 25.6 25.6 25.6z m768 204.8H640c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h194.56c-56.32 120.32-181.76 204.8-322.56 204.8-179.2 0-330.24-133.12-353.28-307.2h-51.2c25.6 202.24 197.12 358.4 407.04 358.4 153.6 0 289.28-84.48 358.4-212.48V896c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6V640c-2.56-28.16-28.16-25.6-28.16-25.6z"
              p-id="3723"
            ></path>
          </svg>
          <p style="display: block; font-size: 12px; margin-left: 5px">
            换一换
          </p>
        </div>
        <a
          class="btn more"
          style="width: 58px; color: #505050; display: flex"
          @click="gotoDetail(getType(list.name))"
        >
          <p style="display: block; font-size: 12px; width: 25px">更多</p>
          <svg
            width="16px"
            height="16px"
            style="display: block"
            t="1589294241068"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1663"
          >
            <path
              d="M320 828.8L636.16 512 320 195.2a32 32 0 1 1 45.44-45.44L704 489.6a32 32 0 0 1 0 45.44l-339.2 339.2a32 32 0 0 1-44.8-45.44z"
              p-id="1664"
              fill="#505050"
            ></path>
          </svg>
        </a>
      </div>
    </header>
    <div class="zone-list-box">
      <div class="live-card" v-for="item in list.data">
        <div @click="gotoPlayer(item.id)">
          <div class="pic">
            <img
              :src="item.cover"
              @error="handleImageError"
              alt=""
              style="width: 100%; height: 100%; border-radius: 2px"
            />
          </div>
          <div class="up">
            <div class="txt">
              <p class="name">{{ item.name }}</p>
              <p class="desc">
                {{ item.description == "" ? "" : item.description }}
              </p>
              <div
                v-for="tag in item.tag.split(',')"
                style="display: inline-block"
              >
                <div v-if="tag != 'Unknown' && tag != null" class="tag">
                  {{ tag }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import api from "@/api/home.js";
let list = reactive();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  isPic: {
    type: Boolean,
    default: false,
  },
});
const router = useRouter();
list = props.data;

const changeRandom = () => {
  if (list.name == "动漫") {
    api
      .getAnime()
      .then((res) => {
        if (res.code === 0) {
          list.data = res.anime;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (list.name == "电影") {
    api
      .getMovie()
      .then((res) => {
        if (res.code === 0) {
          list.data = res.movie;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (list.name == "综艺") {
    api
      .getVariety()
      .then((res) => {
        if (res.code === 0) {
          list.data = res.variety;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (list.name == "电视剧") {
    api
      .getTV()
      .then((res) => {
        if (res.code === 0) {
          list.data = res.tv;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (list.name == "图片") {
    api
      .getPictures()
      .then((res) => {
        if (res.code === 0) {
          list.data = res.pictures;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const gotoPlayer = (video_id) => {
  if (!props.isPic) {
    router.push({
      name: "video",
      query: {
        video_id,
      },
    });
  }
};
function getType(name) {
  if (name == "动漫") return 0;
  else if (name == "电影") return 1;
  else if (name == "综艺") return 2;
  else if (name == "电视剧") return 3;
  else if (name == "图片") return 4;
}
const gotoDetail = (type) => {
  router.push({
    name: "detail",
    query: {
      type,
    },
  });
};
function handleImageError(event) {
  event.target.src = "/src/assets/img/default.png";
}
</script>

<style scoped lang="less">
.storey-title {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 36px;

  .l-con {
    display: -ms-inline-flexbox;
    display: inline-flex;
  }
}

.icon {
  fill: #999999;
}

.zone-list-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 854px;
  height: 404px;
}

.exchange-btn {
  height: 22px;

  .btn-change {
    padding: 0 0 0 6px;
    width: 78px;
  }

  .more {
    padding: 0 0 0 12px;
    width: 58px;
    margin-left: 12px;
  }

  .btn:hover {
    background-color: #f4f4f4;
  }
}

.exchange-btn .btn .xzsvg {
  transform: rotate(0deg);
  transition: all 0.5s;
}

.exchange-btn .btn:hover .xzsvg {
  background-color: #f4f4f4;
  transform: rotate(-360deg);
}

.exchange-btn .btn {
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  height: 22px;
  text-align: center;
  border: 1px solid silver;
  border-radius: 2px;
  font-size: 12px;
  color: #505050;
  transition: all 0.2s;
  line-height: 22px;
}

.btn:hover {
  background-color: #f4f4f4;
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
  transition: all 0.2s;
  line-height: 22px;
}

.btn-change:hover .xzsvg {
  transform: rotate(-360deg);
}

.btn-change .xzsvg {
  transform: rotate(0deg);
  transition: all 0.5s;
}

.btn {
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  height: 22px;
  text-align: center;
  border: 1px solid silver;
  border-radius: 2px;
  font-size: 12px;
  color: #505050;
  transition: all 0.2s;
  line-height: 22px;
}

.storey-title {
  .name {
    margin: 0 20px 0 0;
    vertical-align: bottom;
    font-size: 20px;
    line-height: 36px;
  }
}

.live-card {
  width: 206px;
  height: 189px;

  .pic {
    position: relative;
    display: block;
    cursor: pointer;
    margin-bottom: 10px;
    width: 100%;
    height: 116px;
  }

  .up {
    display: flex;
  }

  .pic:before {
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

.live-card .up .txt {
  width: 100%;

  .name {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }

  p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
  }

  .desc {
    font-size: 12px;
    color: #505050;
    line-height: 18px;
    margin-top: 2px;
  }

  .tag {
    font-size: 12px;
    line-height: 16px;
    color: #999;
    margin-top: 8px;
  }
}
</style>
