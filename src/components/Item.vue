<template>
  <div class="item">
    <Head text="商品列表" left="1" path="/nav"/>
    <div class="logined-item">
      <input type="text" placeholder="请输入商品条码或拼音助记码" v-model="input" @input="onInput">
      <ul class="filter">
        <li :class="type==='#' && 'selected'" @click="select($event.target.innerHTML)">#</li>
        <li :class="type==='A' && 'selected'" @click="select($event.target.innerHTML)">A</li>
        <li :class="type==='B' && 'selected'" @click="select($event.target.innerHTML)">B</li>
        <li :class="type==='C' && 'selected'" @click="select($event.target.innerHTML)">C</li>
        <li :class="type==='D' && 'selected'" @click="select($event.target.innerHTML)">D</li>
        <li :class="type==='E' && 'selected'" @click="select($event.target.innerHTML)">E</li>
        <li :class="type==='F' && 'selected'" @click="select($event.target.innerHTML)">F</li>
        <li :class="type==='G' && 'selected'" @click="select($event.target.innerHTML)">G</li>
        <li :class="type==='H' && 'selected'" @click="select($event.target.innerHTML)">H</li>
        <li :class="type==='I' && 'selected'" @click="select($event.target.innerHTML)">I</li>
        <li :class="type==='J' && 'selected'" @click="select($event.target.innerHTML)">J</li>
        <li :class="type==='K' && 'selected'" @click="select($event.target.innerHTML)">K</li>
        <li :class="type==='L' && 'selected'" @click="select($event.target.innerHTML)">L</li>
        <li :class="type==='M' && 'selected'" @click="select($event.target.innerHTML)">M</li>
        <li :class="type==='N' && 'selected'" @click="select($event.target.innerHTML)">N</li>
        <li :class="type==='O' && 'selected'" @click="select($event.target.innerHTML)">O</li>
        <li :class="type==='P' && 'selected'" @click="select($event.target.innerHTML)">P</li>
        <li :class="type==='Q' && 'selected'" @click="select($event.target.innerHTML)">Q</li>
        <li :class="type==='R' && 'selected'" @click="select($event.target.innerHTML)">R</li>
        <li :class="type==='S' && 'selected'" @click="select($event.target.innerHTML)">S</li>
        <li :class="type==='T' && 'selected'" @click="select($event.target.innerHTML)">T</li>
        <li :class="type==='U' && 'selected'" @click="select($event.target.innerHTML)">U</li>
        <li :class="type==='V' && 'selected'" @click="select($event.target.innerHTML)">V</li>
        <li :class="type==='W' && 'selected'" @click="select($event.target.innerHTML)">W</li>
        <li :class="type==='X' && 'selected'" @click="select($event.target.innerHTML)">X</li>
        <li :class="type==='Y' && 'selected'" @click="select($event.target.innerHTML)">Y</li>
        <li :class="type==='Z' && 'selected'" @click="select($event.target.innerHTML)">Z</li>
      </ul>
      <div class="xxx" v-for="(item,index) in list(input,type)" :key="index"
           @click="onGo(item.barcode,item.asknum,item.stocknum)">
        <div>
          {{item.goodsname}} , 库存:{{item.stocknum}}
        </div>
        <div>
          {{item.barcode}} , {{item.py}}
        </div>
      </div>
    </div>
    <!--    <div class="notice" v-if="!$store.state.user">-->
    <!--      <span>请登录后查看</span>-->
    <!--      <router-link to="/login">立即登录</router-link>-->
    <!--    </div>-->
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Input from '@/components/Input.vue';
  import Head from '@/components/Head.vue';

  @Component({
    components: {Head, Input}
  })
  export default class Item extends Vue {
    data = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
      'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    type = '#';
    goodsList: ItemData[] = [];
    input = '';
    barcode = '';
    asknum = '';
    stocknum = '';


    get list() {
      return (input: string, code: string) => {
        const newGoodList: ItemData[] = [];
        this.goodsList.map((item: ItemData) => {
          let barcodeNum = item.barcode.indexOf(input);
          let pyNumUpperCase = item.py.toUpperCase().indexOf(input);
          let pyNumLowerCase = item.py.toLowerCase().indexOf(input);
          if (!input) {
            barcodeNum = -1;
            pyNumUpperCase = -1;
            pyNumLowerCase = -1;
          }
          if (barcodeNum >= 0 ||
            pyNumUpperCase >= 0 ||
            pyNumLowerCase >= 0 ||
            this.trim(item.py).substring(0, 1) === code.toLowerCase() ||
            code === '#') {
            newGoodList.push(item);
          }
        });
        return newGoodList;
      };
    }

    onInput() {
      this.type = !this.input ? '#' : '';
    }

    select(value: string) {
      this.type = value;
    }

    trim(str: string) {
      return str.replace(/\d+|\s+/g, '');
    }

    onGo(barcode: string, asknum: string, stocknum: string) {
      this.barcode = barcode;
      this.asknum = asknum;
      this.stocknum = stocknum;
      this.$router.push({path: '/detail', query: {barcode, asknum, stocknum}});
    }

    created() {
      this.$store.commit('getUser');
      if (this.$store.state.user) {
        this.$store.dispatch(
          'getItem',
          {
            url: '/sx/order/goods/shophz',
            method: 'POST',
            value: JSON.stringify({creater: this.$store.state.user.userno})
          }).then(res => {
          console.log(res);
          this.goodsList = res.data.resultObj.map((item: ItemName) => item.carddata);//[{},{},...]
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/item";
</style>