<template>
    <div id = "Login" class="login_content">
        <van-cell-group>
            <van-field
                    v-model="user.username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('question')">
            </van-field>
            <van-field
                    v-model="user.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required>
            </van-field>
            <van-button class="btn_width" type="info" to="/registe">
                确认
            </van-button>
            <van-button class="btn_width" type="info" to="/registe">
                返回
            </van-button>
        </van-cell-group>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Field, Button } from 'vant';
    Vue.use(Field).use(Button);
    export default {
        name: "Login",
        data () {
            return {
                msg: 'Welcome to Login',
                user: {
                    username: '',
                    password: ''
                }
            }
        }
    }
</script>

<style scoped>
    .login_content{
        width: 100%;
        height: 200px;
    }
    .btn_width{
        width: 100%;
    }
</style>
