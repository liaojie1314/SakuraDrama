<template>
  <div class="detail-view">
    <MiniHeader></MiniHeader>
    <h2 style="text-align: center; margin-top: 10px; margin-bottom: 5px">
      {{ name }}
    </h2>
    <BBody :show-data="showData" :type="type" @change-num="changeNum"></BBody>
    <BBottom></BBottom>
  </div>
</template>

<script setup>
import MiniHeader from "../components/MiniHeader.vue";
import BBottom from "../components/BBottom.vue";
import BBody from "../components/Body/BBody.vue";
import { useRoute } from "vue-router";
import api from "@/api/detail.js";
import { reactive, onMounted } from "vue";
const route = useRoute();
let type = route.query.type;
const name = getName();
const typeForm = {
  type: type,
  pagenum: 1,
  pagesize: 25,
};
let showData = reactive({
  total: 0,
  data: [],
});
const changeNum = (value) => {
  typeForm.pagenum = value;
  getByType();
};
const getByType = () => {
  api.detailApi(typeForm).then((res) => {
    if (res.code == 0) {
      showData.total = res.data.total;
      showData.data = res.data.results;
    }
  });
};
function getName() {
  if (type == 0) {
    return "动漫";
  } else if (type == 1) {
    return "电影";
  } else if (type == 2) {
    return "综艺";
  } else if (type == 3) {
    return "电视剧";
  } else if (type == 4) {
    return "图片";
  }
}
onMounted(() => {
  getByType();
});
</script>

<style scoped lang="less"></style>
