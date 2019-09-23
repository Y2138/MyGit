<template>
    <div id = "head">
        <van-collapse v-model="activeNames" accordion>
            <van-collapse-item :title="title">
                <div class="content">
                    你说啥
                </div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Icon, Collapse, CollapseItem } from 'vant';
    Vue.use(Icon).use(Collapse).use(CollapseItem);

    export default {
        name: "head",
        data () {
            return {

            }
        },
        props: ['title','activeNames'],
        methods: {

        }
    }
</script>

<style scoped>
    #head{
        margin: 10px 4px 0;
        width: 100%;
        height: 100%;
    }
    .content{
        height: 200px;
    }
</style>