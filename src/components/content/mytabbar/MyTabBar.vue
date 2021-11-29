<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home" textColor="#ff5777">
        <template v-slot:tab-item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:tab-item-icon-active>
          <img src="~assets/img/tabbar/home-active.svg" alt="" />
        </template>
        <template v-slot:tab-item-text> 首页 </template>
      </tab-bar-item>
      <tab-bar-item path="/category" textColor="#ff5777">
        <template v-slot:tab-item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:tab-item-icon-active>
          <img src="~assets/img/tabbar/category-active.svg" alt="" />
        </template>
        <template v-slot:tab-item-text> 分类 </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" textColor="#ff5777">
        <template v-slot:tab-item-icon>
          <img src="~assets/img/tabbar/cart.svg" alt="" />
        </template>
        <template v-slot:tab-item-icon-active>
          <img src="~assets/img/tabbar/cart-active.svg" alt="" />
        </template>
        <template v-slot:tab-item-text> 购物车 </template>
      </tab-bar-item>
      <tab-bar-item path="/profiles" textColor="#ff5777">
        <template v-slot:tab-item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:tab-item-icon-active>
          <img src="~assets/img/tabbar/profile-active.svg" alt="" />
        </template>
        <template v-slot:tab-item-text> 我的 </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";

export default {
  name: "MyTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
