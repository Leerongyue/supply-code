import Vue from 'vue';
import Vuex from 'vuex';
import {request} from '@/helper/request';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    barcode: ''
  },
  mutations: {
    saveUser(state, payload) {
      console.log(1);
    },
    saveItem(state, payload) {
      console.log(1);
    },
    transferBarcode(state, payload) {
      state.barcode = payload.barcode;
    }
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
