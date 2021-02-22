import Vue from 'vue';
import App from './App.vue';
import feather from 'vue-icon';

import store from './vuex/store';

Vue.config.productionTip = false;

Vue.use(feather, 'v-icon');

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
