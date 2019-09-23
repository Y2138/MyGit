<template>
    <div id = "head">
        <Display title="全部时间" activeNames="whole"></Display>
        <Display title="早间习惯" activeNames="morning"></Display>
        <Display title="午间习惯" activeNames="noon"></Display>
        <Display title="晚间习惯" activeNames="night"></Display>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Icon } from 'vant';
    import Display from './display'
    Vue.use(Icon);

    export default {
        name: "head",
        data () {
            return {

            }
        },
        methods: {
            toLast: function () {
                this.$router.go(-1);
            }
        },
        components: {
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