<template>
  <div id = "Base">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to="/base/home">主页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="/">发现</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" to="/base/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Tabbar, TabbarItem } from 'vant';


  Vue.use(Tabbar).use(TabbarItem);
  export default {
    name: "Base",
    data () {
      return {
        active: 'home'
      }
    },
  }
</script>

<style scoped>
  #Base{
    width: 100%;
  }

</style>
