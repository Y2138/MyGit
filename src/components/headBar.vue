<template>
    <div id = "head">
        <van-icon size="32px" name="arrow-left" @click="toLast()"></van-icon>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Icon } from 'vant';
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
        }
    }
</script>

<style scoped>
    #head{
        float: left;
        margin-top:10px;
        margin-left: 6px;
        height: 44px;
    }
</style>