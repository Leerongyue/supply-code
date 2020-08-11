import Vue from 'vue';
import Vuex from 'vuex';
import {request} from '@/helper/request';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    saveUser(state, payload) {
      // setItem('user', JSON.stringify(payload.user));
    },
  },
  actions: {
    async login({commit}, payload) {
      const res = await request(payload.url, payload.method, payload.value);
      commit('saveUser', {user: payload.user});
      return res;
    },
  },
  modules: {}
});
