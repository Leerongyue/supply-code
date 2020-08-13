<template>
  <div class="item">
    {{input}}
    <Head text="商品列表" left="1" path="/nav"/>
    <input type="text" placeholder="请输入商品条码或拼音助记码" v-model="input">
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
    <ul class="itemList">
      <routerLink to="/detail" v-for="item in goodsList" :key="item.barcode">
        <li
          v-if="trimNumber(item.py).substring(0,1)===type.toLowerCase() || type==='#' ||item.barcode===input ||item.py===input"
          @click="setBarcode(item.barcode,item.asknum,item.goodsname)"
        >
          {{[parseInt(item.barcode)]}}[{{item.py}}] {{item.goodsname}}*{{item.asknum}}
        </li>
      </routerLink>
    </ul>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Input from '@/components/Input.vue';
  import Head from '@/components/Head.vue';

  type ItemName = {
    carddata: { barcode: string; goodsname: string };
  }

  @Component({
    components: {Head, Input}
  })
  export default class Item extends Vue {
    data = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
      'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    type = '#';
    goodsList = [];
    input = '';

    select(value: string) {
      this.type = value;
      // <!--    <ul class="filter">-->
      // <!--      <li-->
      // <!--        v-for="item in data"-->
      // <!--        :key="item"-->
      // <!--        :class="type===item && 'selected'"-->
      // <!--        @click="select($event.target.innerHTML)"-->
      // <!--      >-->
      // <!--        {{item}}-->
      // <!--</li>-->
      // < !--</ul>-->;;;
    }

    trimNumber(str: string) {
      return str.replace(/\d+/g, '');
    }

    onBack() {
      this.$router.push('/');
    }

    setBarcode(barcode: string, number: string, goodsname: string) {
      this.$store.commit('transferBarcode', {barcode});
      this.$store.commit('transferNumber', {number});
      this.$store.commit('transferGoodsName', {goodsname});
    }

    created() {
      this.$store.dispatch(
        'getItem',
        {
          url: '/goods/shophz/',
          method: 'POST',
          value: JSON.stringify({creater: this.$store.state.user.userno})
        }).then(res => {
        // console.log(res);
        this.goodsList = res.data.resultObj.map((item: ItemName) => item.carddata);
      });
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    position: relative;

    input {
      border-radius: 16px;
      padding: 4px 8px;
      margin: 0 8px;
    }

    .filter {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 4px;
      top: 17%;

      li {
        padding: 0 4px;

        &:nth-child(10) {
          padding: 0 6px;
        }

        &.selected {
          color: white;
          background: rgb(254, 137, 67);
        }
      }
    }

    .itemList {
      margin: 20px 20px 0 8px;

      > a {
        color: inherit;

        li {
          padding: 8px 0;
          border-bottom: 0.9px solid #d4d4d4;

          &:nth-child(1) {
            border-top: 0.9px solid #d4d4d4;
          }
        }
      }
    }
  }
</style>