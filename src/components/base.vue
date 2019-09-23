<template>
  <div id = "Base">
    <HeadBar></HeadBar>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to="/">主页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="/base/registe">发现</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" to="/base/login">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Tabbar, TabbarItem } from 'vant';

  import HeadBar from "./headBar"

  Vue.use(Tabbar).use(TabbarItem);
  export default {
    name: "Base",
    data () {
      return {
        active: 'home'
      }
    },
    components: {
      HeadBar : HeadBar
    }
  }
</script>

<style scoped>

</style>