<template>
  <div class="tabbar-item" @click="jumpPages">
    <div v-if="!isActived">
      <slot name="tab-item-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-item-icon-active"></slot>
    </div>
    <div class="tab-item-text" :style="styleColor">
      <slot name="tab-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    textColor: {
      type: String,
      default: "green",
    },
  },
  methods: {
    jumpPages() {
      if (this.$route.path === this.path) {
        return;
      }
      this.$router.push(this.path);
    },
  },
  computed: {
    isActived() {
      return this.$route.path === this.path ? true : false;
    },
    styleColor() {
      return this.isActived == true ? { color: this.textColor } : {};
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
}
.tabbar-item img {
  width: 25px;
  height: 25px;
  margin-top: 5px;
}
.tab-item-text {
  font-size: 14px;
}
</style>
