<template>
  <div class="item">
    <header>
      <a-icon type="left" class="left" @click="onBack"/>
      <strong>进货报账系统</strong>
      <a-icon type="right" class="right"/>
    </header>
    <input type="text" placeholder="请输入商品条码或拼音助记码">
    <ul class="filter">
      <li :class="type==='全部' && 'selected'" @click="select($event.target.innerHTML)">全部</li>
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
          v-if="trimNumber(item.py).substring(0,1)===type.toLowerCase() || type==='全部'"
          @click="setBarcode(item.barcode)"
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

  type ItemName = {
    carddata: { barcode: string; goodsname: string };
  }

  @Component({
    components: {Input}
  })
  export default class Item extends Vue {
    data = ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
      'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    type = '全部';
    goodsList = [];

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

    setBarcode(barcode: string) {
      this.$store.commit('transferBarcode', {barcode});
    }

    beforeCreate() {
      this.$store.dispatch(
        'getItem',
        {
          url: '/goods/shophz/',
          method: 'POST',
          value: JSON.stringify({creater: 'admin'})
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

    header {
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #d4d4d4;
      padding: 16px 8px 16px 8px;
      margin-bottom: 16px;

      .right {
        visibility: hidden;
      }
    }

    input {
      border-radius: 12px;
      padding-left: 8px;
      margin: 0 8px;

    }

    .filter {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-top: 8px;

      li {
        margin: 8px 1.5px;

        &.selected {
          color: white;
          background: rgb(254, 137, 67);
        }
      }
    }


    .itemList {
      margin: 0 8px;

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