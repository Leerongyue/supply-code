<template>
  <div class="detail">
    <header>
      <a-icon type="left" class="left" @click="onBack"/>
      <span><strong>{{goodsList.length>0? goodsList[0].goodsname:'加载中'}}</strong></span>
      <a-icon type="right" class="right"/>
    </header>
    <main>
      <!--      <div class="collect">-->
      <!--        <span>门店数量:{{goodsList.length}}家</span>-->
      <!--        <span>规格</span>-->
      <!--      </div>-->
      <div class="head">
        <div class="shop">门店(共{{goodsList.length}}家)</div>
        <div class="number">补货量(共{{$store.state.number}})</div>
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

  type ItemName = {
    carddata: { barcode: string; goodsname: string };
  }

  @Component
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