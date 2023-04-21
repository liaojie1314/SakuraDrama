<template>
  <div class="list">
    <div style="margin-bottom: 40px;position: relative;">
      <ItemList :data="props.live" :is-pic="props.isPic">
        <slot></slot>
      </ItemList>
      <ItemTab :data="props.rank" :is-pic="props.isPic"></ItemTab>
    </div>
  </div>
</template>

<script setup>
import ItemList from './ItemList.vue';
import ItemTab from './ItemTab.vue';

const props = defineProps({
  live: {
    type: Object,
    required: true
  },
  rank: {
    type: Object,
    required: true
  },
  isPic: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped lang='less'>
.list {
  margin-top: 50px;
}
</style>