<template>
  <div class="detail">
    <Head text="商品补货量" left="1" path="/item"/>
    <main>
      <div class="property">
        <span>商品规格</span>
        <span>补货总量</span>
      </div>
      <div class="fuck">
        <span>{{$store.state.goodsname}}</span>
        <span>{{$store.state.number}}</span>
      </div>
      <div class="head">
        <div class="shop">门店</div>
        <div class="number">补货量</div>
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

  type ItemName = {
    carddata: { barcode: string; goodsname: string };
  }
  @Component({
    components: {Head}
  })
  export default class Detail extends Vue {
    number = 0;
    goodsList = [];

    created() {
      const value = {
        creater: 'admin',
        barcode: this.$store.state.barcode
      };
      this.$store.dispatch(
        'getDetail',
        {
          url: '/goods/ordermx',
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
    background: white;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 8px 16px 8px;
      background: #d4d4d4;

      .right {
        visibility: hidden;
      }
    }

    main {
      .property {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d4d4d4;

        span {
          padding: 6px 16px;
        }
      }

      .fuck {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d4d4d4;

        span {
          padding: 6px 16px;
        }
      }

      .head {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        border-bottom: 1px solid #d4d4d4;
      }

      .content {
        ul {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #d4d4d4;

          li {
            padding: 6px 16px;
          }
        }
      }

      .collect {
        display: flex;
        justify-content: space-between;
        margin: 8px 16px;
      }
    }
  }
</style>