<template>
    <div id = "Registe">
        {{ msg }}<br>
        <van-button type="info" to="/login">返回</van-button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Field, Button } from 'vant';
    Vue.use(Field).use(Button);
    export default {
        name: "Registe",
        data () {
            return {
                msg: 'Welcome to Registe'
            }
        }
    }
</script>

<style scoped>
    #Registe{
        margin: 0 auto;
        padding-top: 44px;
        width:300px;
        height: 200px;
        vertical-align: center;
        text-align: center;
    }
</style>