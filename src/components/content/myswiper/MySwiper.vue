<template>
  <div>
    <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="banner in banners" :key="banner.acm">
        <a :href="banner.link"
          ><img :src="banner.image" alt="图片加载失败"
        /></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "MySwiper",
  data() {
    return {};
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
    swiperOptions: {
      type: Object,
      default() {
        return {};
      },
      // Some Swiper option/callback...
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },

  directives: {
    swiper: directive,
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
.home-swiper {
  height: 200px;
}
.home-swiper img {
  height: 200px;
}
</style>
