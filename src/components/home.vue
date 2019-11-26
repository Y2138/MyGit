<template>
    <div id = "home">
        <van-nav-bar class="nav-head">
            <van-icon name="like-o" slot="left" />
            <van-search shape="round" placeholder = "输入习惯名称" slot="title"></van-search>
            <van-icon name="clock-o" slot="right" />
        </van-nav-bar>
        <van-collapse v-model = "activeName">
            <van-collapse-item v-for="item in titleItem" :key="item.name" :name = item.name :title = item.title>
                <Habits></Habits>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Row, Col, Icon, Search, NavBar, Collapse, CollapseItem } from 'vant';
    import Habits from "@/components/habits";

    Vue.use(Row).use(Col).use(Icon).use(Search).use(NavBar).use(Collapse).use(CollapseItem);

    export default {
        name: "home",
        data () {
            return {
                activeName: [
                    'Todo', 'finished'
                ],
                titleItem: [
                    {
                        name: 'Todo',
                        title: '今日未做'
                    }, {
                        name: 'Finished',
                        title: '今日已做'
                    }
                ]
            }
        },
        components: {
            Habits
        },
        created() {

        }
    }
</script>

<style scoped>
.nav-head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 54px;
    margin-bottom: 1rem;
    z-index: 999!important;
}
</style>
