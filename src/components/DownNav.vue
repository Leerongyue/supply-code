<template>
  <div class="downNav">
<!--    <router-link to="/login" exact active-class="selected" class="list">-->
    <!--      <a-icon type="check-circle"/>-->
    <!--      <span>登录</span>-->
    <!--    </router-link>-->
    <router-link to="/nav" active-class="selected" class="list">
      <a-icon type="plus-circle"/>
      <span>主页</span>
    </router-link>
    <router-link to="/my" active-class="selected" class="list">
      <a-icon type="smile"/>
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
    background: #f5f5f5;
    border-top: 0.8px solid #d4d4d4;

    > .list.selected {
      color: rgb(82, 102, 237);
    }

    a {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 8px 0;
      color: inherit;
      font-size: 32px;

      span {
        font-size: 12px;

      }
    }
  }
</style>