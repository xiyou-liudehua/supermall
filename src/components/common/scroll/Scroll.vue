<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <!-- <div class="pulldown-tips">
        <div v-show="beforePullDown">下拉刷新</div>
        <div v-show="!beforePullDown">
          <div v-show="!isPullDown">刷新中...</div>
        </div>
      </div> -->
      <slot></slot>
      <div class="pullup-tips">
        <div v-if="!isPullUp">{{ pullUpTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import PullDown from "@better-scroll/pull-down";
import ObserveDom from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";

BScroll.use(Pullup);
BScroll.use(PullDown);
BScroll.use(ObserveDom);
BScroll.use(ObserveImage);
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true,
    },
    pullUp: {
      type: Boolean,
      default: false,
    },
    pullUpTitle: {
      type: String,
      default: "loading...",
    },
    pullDown: {
      type: Boolean,
      default: false,
    },
    pullDownTitle: {
      type: String,
      default: "loading...",
    },
  },
  data() {
    return {
      scroll: null,
      isPullUp: false,
      beforePullDown: true,
      isPullDown: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        pullUpLoad: this.pullUp,
        pullDownRefresh: this.pullDown,
        probeType: this.probeType,
        observeDOM: true,
        observeImage: true,
      });
      if (this.pullUp) {
        this.scroll.on("pullingUp", this.pullingUpHandler);
      }
      if (this.pullDown) {
        this.scroll.on("pullingDown", this.pullingDownHandler);
      }
      if (this.probeType === 3) {
        this.scroll.on("scroll", this.listenScroll);
      }
    },
    pullingUpHandler() {
      this.isPullUp = true;
      // console.log("上拉加载刷新");

      this.$emit("pullUpLoadData");

      this.scroll.finishPullUp();
      this.scroll.refresh();
      this.beforePullDown = true;
      this.isPullUp = false;
    },
    pullingDownHandler() {
      this.isPullDown = true;
      // console.log("下拉加载刷新");

      // this.$emit("pullDownLoadData");

      this.scroll.finishPullDown();
      this.scroll.refresh();
      this.isPullDown = false;
    },
    listenScroll(position) {
      this.$emit("scroll", position);
    },
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
.pullup-tips,
.pulldown-tips {
  height: 66px;
  text-align: center;
  font-size: 18px;
}
</style>
