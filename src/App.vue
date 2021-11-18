<template>
  <div id="app">
    <my-tab-bar></my-tab-bar>
  </div>
</template>
<script>
import MyTabBar from "components/content/mytabbar/MyTabBar";
export default {
  components: { MyTabBar },
  name: "App",
};
</script>
<style>
@import "assets/css/base.css";
</style>
