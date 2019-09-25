<template>
    <div id="habits">
        <van-row type="flex" class="cWrap" justify="left">
            <van-col v-for="habit in habitList" span="8">
<!--                :key="habitList"-->
                <div class="habit">
                    <div>
                        {{ habit }}
                    </div>
                    <span>
                        {{ habit }}
                    </span>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Row, Col, Icon } from 'vant';
    Vue.use(Row).use(Col).use(Icon);

    export default {
        name: "habits",
        data () {
            return {
                habitList: ['早起喝水', '跑步', '做眼保健操', '背单词']
            }
        }
    }
</script>

<style scoped>
    .cWrap{
        flex-wrap: wrap;
    }
    .habit{
        height: 100px;
        width: 100px;
        padding: 12px;
        text-align: center;
    }
</style>