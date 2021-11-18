<template>
  <div class="goods-list">
    <goods-list-item
      v-for="good in goods"
      :key="good.acm"
      :goodsItem="good"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.goods-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
  /* content-visibility: auto; */
}
</style>
