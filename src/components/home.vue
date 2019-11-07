<template>
    <div id = "home">
        <van-nav-bar class="nav-head">
            <van-icon name="like-o" slot="left" />
            <van-search shape="round" placeholder = "输入习惯名称" slot="title"></van-search>
            <van-icon name="clock-o" slot="right" />
        </van-nav-bar>
        <van-collapse v-model = "activeName">
            <van-collapse-item v-for="item in titleItem" :key="item.name" :name = item.name :title = item.title>
                <div class="content">
                    <Habits></Habits>
                </div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Axios from 'axios';
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
            // Axios.get('https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250').then(res => {
            //     console.log(res);
            // })
            let url1 = 'http://www.woaini.com/regexp';
            let url2 = 'http://www.woaini.com/getUser';
            let url3 = 'http://www.woaini.com/getList';
            let url4 = 'http://www.woaini.com/list';
            let url5 = 'http://www.woaini.com/getHabit';
            Axios.get(url5).then(res => {
                console.log(res);
            })
        }
    }
</script>

<style scoped>
.nav-head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999!important;
}
</style>
