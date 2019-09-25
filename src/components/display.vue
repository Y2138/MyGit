<template>
    <div id = "display">
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item :title="title">
                <div class="content">
                    <slot></slot>
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
        name: "display",
        data () {
            return {
                title: this.getTitle,
                activeName: this.getActiveName
            }
        },
        props: {
            getTitle: String,
            getActiveName: String
        },
        methods: {

        }
    }
</script>

<style scoped>
    #display{
        margin: 10px 4px 0;
        width: 100%;
        height: 100%;
    }
    .content{
        height: 200px;
    }
</style>