import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            userName: '未登录'
        }
    },
    // 改变数据的唯一途径,不能处理异步操作
    mutations: {
        changeUser(state, status) {
            state.userInfo.userName = status.userName;
        },
        logout(state) {
            state.userInfo.userName = '未登录';
        }
    },
    // 可以提交mutations,可以处理异步操作
    actions: {
        loginAction({commit}, user) {
            commit('changeUser', user);
        }
    },
    getters: {

    }
})