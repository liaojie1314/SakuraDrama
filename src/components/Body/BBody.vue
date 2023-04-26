<template>
  <div style="margin-bottom: 40px; position: relative">
    <div class="live-list">
      <div class="zone-list-box">
        <div class="live-card" v-for="item in showData.data">
          <a @click.stop="gotoPlay(item.id)">
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
                <p class="desc" v-if="item.description">
                  {{ item.description }}
                </p>
                <div
                  v-for="tag in item.tag.split(',')"
                  style="display: inline-block"
                >
                  <div v-if="tag != 'Unknown'" class="tag">{{ tag }}</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <el-pagination
    background
    :hide-on-single-page="true"
    :current-page.sync="pagenum"
    :total="showData.total"
    layout="prev, pager, next"
    @current-change="currentChange"
    :page-size="25"
  >
  </el-pagination>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["changeNum"]);
const props = defineProps({
  showData: {
    type: Object,
    required: true,
  },
  type: {
    type: Number,
  },
});
let showData = reactive(props.showData);
const type = props.type;
console.log(showData.total);
let pagenum = ref(1);

const currentChange = (value) => {
  pagenum.value = value;
  emit("changeNum", value);
};

function gotoPlay(video_id) {
  if (type != 4) {
    router.push({
      name: "video",
      query: {
        video_id,
      },
    });
  }
}
function handleImageError(event) {
  event.target.src = "/src/assets/img/default.png";
}
</script>

<style scoped lang="less">
.live-list {
  height: fit-content;
  width: 1500px;
  margin: 0 auto;
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
  margin-bottom: 15px;
}
</style>
