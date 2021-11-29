<template>
  <div class="goods-list">
    <goods-list-item
      v-for="good in randomGoods"
      :key="good.shopId"
      :goodsItem="good"
    ></goods-list-item>
  </div>
</template>

<script>
import RandomShopId from "components/content/randomid/randomId";

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
  computed: {
    randomGoods() {
      this.goods.forEach((good) => {
        good.shopId = RandomShopId();
        // console.log(good.shopId);
      });
      return this.goods;
    },
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
