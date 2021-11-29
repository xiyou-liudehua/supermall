<template>
  <div id="home">
    <nav-bar id="home-nav"
      ><template v-slot:center>
        <p>购物街</p>
      </template></nav-bar
    >
    <tab-control
      class="tab-control-up"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlUp"
      v-show="isShowTab"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pullUp="true"
      pullUpTitle="加载中..."
      @scroll="isScroll"
      @pullUpLoadData="loadGoods"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControlDown"
        v-show="!isShowTab"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import FeatureView from "./childcomps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop,
  },
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isShowTab: false,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    setTimeout(() => {
      this.tabOffsetTop = this.$refs.tabControlDown.$el.offsetTop - 43;
    }, 200);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControlUp.currentIndex = index;
      this.$refs.tabControlDown.currentIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 800);
    },
    isScroll(position) {
      this.isShowBackTop = position.y < -2000 ? true : false;

      this.isShowTab = position.y < -this.tabOffsetTop ? true : false;
    },
    loadGoods() {
      this.getHomeGoods(this.currentType);
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
#home-nav {
  color: white;
  background-color: var(--color-tint);
}
.tab-control-up {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  background-color: #fff;
}
.content {
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>
