<template>
  <div class="downNav">
    <router-link to="/login" exact active-class="selected" class="item">
      <a-icon type="check-circle" class="icon"/>
      <span>登录</span>
    </router-link>
    <router-link to="/backstage" active-class="selected" class="item">
      <a-icon type="bar-chart" class="icon"/>
      <span>补货</span>
    </router-link>
    <router-link to="/my" active-class="selected" class="item">
      <a-icon type="user" class="icon"/>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class DownNav extends Vue {

  }
</script>

<style lang="scss" scoped>
  .downNav {
    display: flex;
    justify-content: space-around;
    background: rgb(53, 156, 231);

    > .item.selected {
      color: #00008B;
    }

    a {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 8px 0;
      color: #F8F8FF;
      font-size: 32px;

      /*.icon {*/
      /*  font-size: 24px;*/
      /*}*/

      span {
        font-size: 12px;

      }
    }
  }
</style>