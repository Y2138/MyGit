<template>
    <div id = "Login" class="login_content">
        <van-tabs>
            <van-tab title='登录'>
                <van-cell-group>
                    <van-field
                            v-model="loginUsername" label="用户名" placeholder="请输入用户名" required clearable>
                    </van-field>
                    <van-field v-model="loginPassword" type="password" label="密码" placeholder="请输入密码" required clearable>
                    </van-field>
                    <van-button class="btn_width" type="info" @click="loginHandle">登录</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title='注册'>
                <van-cell-group>
                    <van-field v-model="registUsername" label="用户名" placeholder="请输入用户名" required clearable>
                    </van-field>
                    <van-field v-model="registPassword" type="password" label="密码" placeholder="请输入密码" required clearable>
                    </van-field>
                    <van-field v-model="registRepassword" type="password" label="确认密码" placeholder="请再次输入密码" required clearable>
                    </van-field>
                    <van-button class="btn_width" type="info" @click="registHandle">注册</van-button>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import url from '../service.config'
    import { mapActions } from 'vuex'
    import {CellGroup, Toast ,Field, Button, Tab, Tabs } from 'vant';
    Vue.use(CellGroup).use(Field).use(Button).use(Tab).use(Tabs).use(Toast);
    export default {
        name: "Login",
        data () {
            return {
                msg: 'Welcome to Login',
                loginUsername: '',
                loginPassword: '',
                registUsername: '',
                registPassword: '',
                registRepassword: ''
            }
        },
        methods: {
            ...mapActions(['loginAction']),
            loginHandle() {
                axios({
                    url: url.loginUser,
                    method: 'post',
                    data: {
                        userName: this.loginUsername,
                        password: this.loginPassword
                    }
                }).then(res => {
                    if (res.data.code === 200) {
                        // 模拟延时
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve();
                            }, 1000);
                        }).then(()=> {
                            Toast.success('登录成功');
                            // 保存登录状态
                            this.loginAction(res.data.userInfo);
                            this.$router.push('/');
                        }).catch(err => {
                            Toast.fail('保存登录状态失败');
                            console.log(err);
                        })
                        Toast.success('登录成功');
                    } else if (res.data.code === 201) {
                        Toast.fail('用户名不存在');
                    } else if (res.data.code === 202) {
                        Toast.fail('密码错误');
                    }
                }).catch(err => {
                    console.log(err);
                    Toast.fail('登录失败')
                })
            },
            registHandle() {
                axios({
                    url: url.registUser,
                    method: 'post',
                    data: {
                        userName: this.registUsername,
                        password: this.registPassword
                    }
                }).then(res => {
                    if (res.data.code === 200 ){
                        Toast.success('注册成功');
                        this.registPassword = this.registUsername = this.registRepassword = '';
                    } else {
                        Toast.fail('注册失败');
                    }
                }).catch(err => {
                    console.log(err);
                    Toast.fail('注册失败')
                })
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
