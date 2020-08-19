import Vue from 'vue';
import Vuex from 'vuex';
import {request} from '@/helper/request';
import setItem from '@/helper/setItem';
import getItem from '@/helper/getItem';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      userno: '',
      password: '',
      barcode: '',
      asknum: '',
      stocknum: '',
    },
  },
  mutations: {
    saveUser(state, payload) {
      setItem('user', JSON.stringify(payload.user));
    },
    getUser(state) {
      state.user = getItem('user');
    },
    saveItem(state, payload) {
      console.log(1);
    },
    // saveBarcode(state, payload) {
    //   setItem('barcode', JSON.stringify(payload.barcode));
    // },
    // getBarcode(state) {
    //   state.barcode = getItem('barcode');
    // },
    // saveAskNum(state, payload) {
    //   setItem('asknum', JSON.stringify(payload.asknum));
    // },
    // getAskNum(state) {
    //   state.asknum = getItem('asknum');
    // },
    // saveStockNum(state, payload) {
    //   setItem('stocknum', JSON.stringify(payload.stocknum));
    // },
    // getStockNum(state) {
    //   state.stocknum = getItem('stocknum');
    // },
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
