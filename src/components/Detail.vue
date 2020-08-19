<template>
  <div class="detail">
    <Head text="商品补货详情" left="1" path="/item"/>
    <main>
      <div class="total">
        <div class="goodsDetail"><strong>商品详情</strong></div>
        <div class="kind">
          <span v-html="'品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名'"></span>
          <span>{{goodsList[0].goodsname}}</span>
        </div>
        <div class="kindName">
          <span>商品规格</span>
          <span>{{goodsList[0].spec}}</span>
          <span>库存总量</span>
          <span>{{stocknum}}</span>
          <span>补货总量</span>
          <span>{{asknum}}</span>
        </div>
      </div>
      <div class="content">
        <div class="shopsList"><strong>门店列表</strong></div>
        <ul v-for="(item,index) in goodsList" :key="index"
        >
          <li v-if="item.barcode===barcode">{{item.shopname}}</li>
          <li v-if="item.barcode===barcode">{{item.asknum}}</li>
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
  import Bus from '@/helper/bus';


  @Component({
    components: {Head}
  })
  export default class Detail extends Vue {
    number = 0;
    goodsList: Item[] = [];
    barcode = '';
    asknum = '';
    stocknum = '';

    created() {
      Bus.$on('transfer', (res: { barcode: string; asknum: string; stocknum: string }) => {
        this.barcode = res.barcode;
        this.asknum = res.asknum;
        this.stocknum = res.stocknum;
      });
      this.$store.commit('getUser');
      const value = {
        creater: this.$store.state.user.userno,
        barcode: this.barcode
      };
      this.$store.dispatch(
        'getDetail',
        {
          url: API.getDetailApi,
          method: 'POST',
          value: JSON.stringify(value)
        }).then(res => {
        console.log(res);
        this.goodsList = res.data.resultObj.map((item: ItemNameDetail) => item.carddata);
      });
    }

    beforeDestroy() {
      Bus.$off('transfer');
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/detail";
</style>