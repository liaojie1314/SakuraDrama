<template>
  <div>
    <MiniHeader></MiniHeader>
    <BPlayer></BPlayer>
    <BComment></BComment>
    <BBottom></BBottom>
  </div>
</template>

<script setup>
import MiniHeader from '../components/MiniHeader.vue';
import BBottom from '../components/BBottom.vue';
import BPlayer from '../components/BPlayer.vue';
import BComment from '../components/BComment.vue';

</script>

<style scoped lang='less'>
.b-player,
.b-comment {
  margin: 0 auto;
  margin-top: 10px;
}
</style>