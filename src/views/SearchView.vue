<template>
  <div class="search-view">
    <MiniHeader></MiniHeader>
    <el-tabs
      v-model="activeName"
      class="demo-tabs"
      @tab-click="handleClick"
      @tab-change="handleChange"
    >
      <div v-for="i in 4">
        <el-tab-pane :label="searchData[i - 1].name" :name="i">
          <BBody :show-data="searchData[i - 1]" @change-num="changeNum"></BBody>
        </el-tab-pane>
      </div>
    </el-tabs>
    <BBottom></BBottom>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import MiniHeader from "../components/MiniHeader.vue";
import BBottom from "../components/BBottom.vue";
import BBody from "../components/Body/BBody.vue";
import api from "@/api/search.js";

const activeName = ref(1);
let searchData = reactive([
  {
    name: "动漫",
    data: [],
    total: 0,
  },
  {
    name: "电影",
    data: [],
    total: 0,
  },
  {
    name: "综艺",
    data: [],
    total: 0,
  },
  {
    name: "电视剧",
    data: [],
    total: 0,
  },
]);
const route = useRoute();
const searchForm = {
  msg: route.query.msg,
  user_id: parseInt(route.query.user_id),
  pagenum: 1,
  pagesize: 25,
};

const search = () => {
  api
    .searchApi(searchForm)
    .then((res) => {
      if (res.code === 0) {
        searchData[0].data = res.data.Animation.videos;
        searchData[1].data = res.data.Movie.videos;
        searchData[2].data = res.data.Variety.videos;
        searchData[3].data = res.data.TV.videos;
        searchData[0].total = res.data.Animation.count;
        searchData[1].total = res.data.Movie.count;
        searchData[2].total = res.data.Variety.count;
        searchData[3].total = res.data.TV.count;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleClick = (tab, event) => {
  //console.log(tab, event)
};

const handleChange = (name) => {
  searchForm.pagenum = 1;
  search();
};
const changeNum = (value) => {
  searchForm.pagenum = value;
  search();
};
onMounted(() => {
  search();
});
</script>

<style scoped lang="less">
.mini-header {
  position: relative;
}

.demo-tabs {
  margin: 0 auto;
  width: 1500px;
  margin-top: 50px;
  margin-bottom: 20px;
  min-height: 232px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
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
