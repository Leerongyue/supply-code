import Vue from 'vue';
import Vuex from 'vuex';
import {request} from '@/helper/request';
import setItem from '@/helper/setItem';
import getItem from '@/helper/getItem';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    saveUser(state, payload) {
      setItem('user', JSON.stringify(payload.user));
    },
    getUser(state) {
      state.user = getItem('user');
    },
    removeUser() {
      window.localStorage.removeItem('user');
    },
    saveItem(state, payload) {
      console.log(1);
    },
  },
  actions: {
    async login({commit}, payload) {
      const res = await request(payload.url, payload.method, payload.value);
      commit('saveUser', {user: payload.user});
      return res;
    },
    async getItem({commit}, payload) {
      return await request(payload.url, payload.method, payload.value);
      commit('saveItem', {item: payload.item});
    },
    async getDetail({commit}, payload) {
      return await request(payload.url, payload.method, payload.value);
      commit('saveUser', {user: payload.user});
    }
  },
  modules: {}
});
