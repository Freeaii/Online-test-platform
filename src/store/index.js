import { objectToString } from '@vue/shared'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
// import user from "./modules/user";

import {teacher_question} from "./modules/teacher";
const guest ={
  id:0,
  username: 'guest',
  name:'Guest',
  role: 'guest',
  avatar:defaultAvatar,
  token_type: 'bearer',
  access_token:'',
}

import defaultAvatar from '@/assets/avatar.png'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: guest
  },
  modules: {
    // user

    //teacher的question板块
    teacher_question
  },
  mutations: {
    // 设置用户和令牌
    setToken(state,token) {
      state.token=token
      if(!token.avatar){
        state.token.avatar = defaultAvatar
      }
    },
  },

  actions:{
    logout(context){
      context.commit('setToken',guest)
    }
  }
})

