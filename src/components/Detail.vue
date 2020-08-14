<template>
  <div class="detail">
    <Head text="商品补货详情" left="1" path="/item"/>
    <main>
      <div class="total">
        <div class="kind">
          <span>商品规格</span>
          <span> {{$store.state.goodsname}}</span>
        </div>
        <div class="kindName">
          <span>品名</span>
          <span>{{}}</span>
        </div>
        <div class="goodNumber">
          <span>补货总量</span>
          <span> {{$store.state.number}}</span>
        </div>
      </div>
      <div class="content">
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

    beforeCreate() {
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
  .detail {
    /*background: white;*/

    main {
      .total {
        background: white;

        div {
          display: flex;
          justify-content: space-between;
          padding: 6px 16px;
          border-bottom: 1px solid #d4d4d4;
        }
      }

      .content {
        ul {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #d4d4d4;
          background: white;

          li {
            padding: 6px 16px;
          }
        }
      }
    }
  }
</style>