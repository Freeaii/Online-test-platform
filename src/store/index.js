import { objectToString } from '@vue/shared'
import { createStore } from 'vuex'
// import user from "./modules/user";
const guest ={
  username: 'guest',
  name:'Guest',
  token_type: 'bearer',
  avatar:defaultAvatar,
  role: 'guest',
  access_token:'',
}

import defaultAvatar from '../assets/avatar.png'

export default createStore({
  state: {
    token: guest
  },
  modules: {
    // user
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

