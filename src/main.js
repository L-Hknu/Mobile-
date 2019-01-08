import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import 'font-awesome/css/font-awesome.min.css';
import './filter';

Vue.use(Vuetify, {
  iconfont: 'fa4',
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base, // #3F51B5
  },
});
Vue.config.productionTip = false;

router.afterEach((to, from, next) =>  {
  window.scrollTo(0, 0);
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
  