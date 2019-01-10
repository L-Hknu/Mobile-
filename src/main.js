import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import './filter';



Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base, // #3F51B5
    sim_card:'#66ccff',
    perm_identity:'#33cc99',
    sim_card1:'#66cc99',
    sim_card2:'#ff9966',
    no_sim:'#ff3300',
    signal_cellular_no_sim:'#999999',
    nav:'#ffffff'
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
