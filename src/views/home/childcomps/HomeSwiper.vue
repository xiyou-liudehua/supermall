<template>
  <div>
    <my-swiper :swiperOptions="swiperOptions" :banners="banners"></my-swiper>
  </div>
</template>

<script>
import MySwiper from "components/content/myswiper/MySwiper";
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
          delay: 4000,
        },
      },
    };
  },
  components: {
    MySwiper,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style scoped></style>
