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
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
