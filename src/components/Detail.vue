<template>
  <div class="detail">
    <Head text="商品补货详情" left="1" path="/item"/>
    <main>
      <div class="total">
        <div class="goodsDetail"><strong>商品详情</strong></div>
        <div class="kind">
          <span v-html="'品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名'"></span>
          <span> {{$store.state.goodsname}}</span>
        </div>
        <div class="kindName">
          <span>商品规格</span>
          <span>''</span>
          <span>补货总量</span>
          <span> {{$store.state.number}}</span>
        </div>
      </div>
      <div class="content">
        <div class="shopsList"><strong>门店列表</strong></div>
        <ul v-for="item in goodsList" :key="item.shopname"
        >
          <li v-if="item.barcode===$store.state.barcode">{{item.shopname}}</li>
          <li v-if="item.barcode===$store.state.barcode">{{item.asknum}}</li>
        </ul>
      </div>
    </main>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Head from '@/components/Head.vue';
  import API from '../../public/api.config';

  type ItemName = {
    carddata: { barcode: string; goodsname: string };
  }
  @Component({
    components: {Head}
  })
  export default class Detail extends Vue {
    number = 0;
    goodsList = [];

    mounted() {
      const value = {
        creater: 'admin',
        barcode: this.$store.state.barcode
      };
      this.$store.dispatch(
        'getDetail',
        {
          url: API.getDetailApi,
          method: 'POST',
          value: JSON.stringify(value)
        }).then(res => {
        console.log(res);
        this.goodsList = res.data.resultObj.map((item: ItemName) => item.carddata);
      });
    }

    get total() {
      const x = this.goodsList.map((g: { asknum: string }) => g.asknum);
      return x;

    }

    onBack() {
      this.$router.push('/item');
    }

  }
</script>

<style lang="scss" scoped>
  @import "src/style/detail";
</style>