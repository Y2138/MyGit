<template>
    <div id="habits">
        <van-row type="flex" class="cWrap" justify="left">
            <van-col v-for="(habit, index) in habitList" :key="index" span="8">
<!--                :key="habitList"-->
                <div class="habit">
                    <div>
                        <img :src="habit.img" >
                    </div>
                    <span>
                        {{ habit.name }}
                    </span>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Row, Col, Icon } from 'vant';
    import Axios from 'axios';
    import url from '../service.config.js'
    Vue.use(Row).use(Col).use(Icon);

    export default {
        name: "habits",
        data () {
            return {
                habitList: []//'早起喝水', '跑步', '做眼保健操', '背单词', '吃东西', '大便', '散步'
            }
        },
        created() {
            // Axios.get('https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250').then(res => {
            //     console.log(res);
            // })
            // let url1 = 'http://www.woaini.com/regexp';
            // let url2 = 'http://www.woaini.com/getUser';
            // let url3 = 'http://www.woaini.com/getList';
            // let url4 = 'http://www.woaini.com/list';
            // let url5 = 'http://www.woaini.com/getHabit';
            Axios.get(url.getHabit).then(res => {
                console.log(res);
                this.habitList = res.data.habitData;
            }).catch(reason => {
                console.log(reason);
            })
        }
    }
</script>

<style scoped>
    .cWrap{
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .habit{
        height: 100px;
        padding: 12px;
        text-align: center;
    }
</style>
