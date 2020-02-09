import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);

export default new vuex.Store({
  state: {
    list: [],
    cart:[],
  },
  mutations: {
    dyzlist(state, k) {
      state.list=k
    },
    dyzcart(state, k) {
      state.cart.push(k)
    }
  },
  getters: {

  },
  actions: {
    dyzlist(state, k) {
    state.commit('dyzlist',k)
    },
    dyzcart(state, k) {
      state.commit('dyzcart', k)
    }
  },
})
