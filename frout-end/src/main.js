import Vue from 'vue'
import App from './App.vue'

// 引入iview UI 插件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/common.css';

// 调用插件
Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
