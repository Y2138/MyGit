<template>
    <div id = "home">
        <van-search shape="round" placeholder = "输入习惯名称"></van-search>
        <Display get-title="全部时间" activeNames="whole">
            <habits></habits>
        </Display>
        <Display get-title="早间习惯" get-active-name="morning">
            <habits></habits>
        </Display>
        <Display get-title="午间习惯" get-active-name="noon">
            <habits></habits>
        </Display>
        <Display get-title="晚间习惯" get-active-name="night">
            <habits></habits>
        </Display>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Row, Col, Icon, Search } from 'vant';
    import Display from './display'
    import Habits from "@/components/habits";

    Vue.use(Row).use(Col).use(Icon).use(Search);

    export default {
        name: "home",
        data () {
            return {

            }
        },
        components: {
            Habits,
            Display
        }
    }
</script>

<style scoped>
    #head{
        margin: 0 auto;
        padding: 0 auto;
    }
</style>