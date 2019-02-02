import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerRight:true
  },
  getters: {
    drawerRight: state => {
      return state.drawerRight;
    }
  },
  mutations: {
    setDrawerRight(state){
      state.drawerRight=!state.drawerRight
    }
  },
  actions: {
    setDrawerRight(context){
      context.commit('setDrawerRight')
    }
  }
})
