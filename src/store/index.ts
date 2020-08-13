import Vue from 'vue';
import Vuex from 'vuex';
import {request} from '@/helper/request';
import setItem from '@/helper/setItem';
import getItem from '@/helper/getItem';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    barcode: '',
    number: ''
  },
  mutations: {
    saveUser(state, payload) {
      state.user = payload.user;
      setItem('user', JSON.stringify(payload.user));
    },
    getUser(state) {
      state.user = getItem('user');
    },
    saveItem(state, payload) {
      console.log(1);
    },
    transferBarcode(state, payload) {
      state.barcode = payload.barcode;
    },
    transferNumber(state, payload) {
      state.number = payload.number;
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
