<template>
  <div class="item">
    <div class="title"><strong>吴经委业务员报账系统</strong></div>
    <input type="text" placeholder="请输入商品条码或拼音助记码">
    <ul class="filter">
      <li
        v-for="item in data"
        :key="item"
        :class="item===type && 'selected'"
        @click="select($event.target.innerHTML)"
      >
        {{item}}
      </li>
    </ul>
    <ul class="itemList">
      <routerLink to="/detail">
        <li
          v-for="item in goodsList"
          :key="item.barcode"
        >
          {{[parseInt(item.barcode)]}} {{item.goodsname}}
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
    }

    created() {
      this.$store.dispatch(
        'getItem',
        {
          url: '/goods/shophz/',
          method: 'POST',
          value: JSON.stringify({creater: 'admin'})
        }).then(res => {
        console.log(res);
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

    .title {
      text-align: center;
      padding: 16px 0;
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