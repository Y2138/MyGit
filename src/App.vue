<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to your Vue.js App'
      }
    }
  }
</script>

<style>
  /*::-webkit-scrollbar{*/
  /*  width:0;*/
  /*  height:1px*/
  /*}*/
  /*::-webkit-scrollbar-thumb{*/
  /*  border-radius:5px;*/
  /*  -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);*/
  /*  background:rgba(0,0,0,.2)*/
  /*}*/
  #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
