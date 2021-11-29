import { createApp } from 'vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as elIcons  from '@element-plus/icons'
import service from './apis/axios'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.$http = service

const reserveds = ['Menu', 'View']
for(const name in elIcons){
  if(!reserveds.includes(name)){
    app.component(name, elIcons[name])
  }else{  
    app.component('Icon' + name, elIcons[name])
  }
}
app.use(ElementPlus, { size: "mini", zIndex:3000 })
app.mount('#app')


// const win = window
// if (process.env.NODE_ENV === 'development') {
//   if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
//     win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
//   }
// }