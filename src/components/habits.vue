<template>
    <div id="habits">
        <van-row type="flex" class="cWrap" justify="left">
            <van-col v-for="habit in habitList" :key="habit" span="8">
<!--                :key="habitList"-->
                <div class="habit">
                    <div>
                        <van-icon name="eye-o" />
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
                habitList: ['早起喝水', '跑步', '做眼保健操', '背单词', '吃东西', '大便', '散步']
            }
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
