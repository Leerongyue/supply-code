<template>
  <div class="nav">
    <Head text="三鑫补货系统" left="1" path="/login"/>
    <router-link to="/item">
      <div class="check">补货查询</div>
    </router-link>
    <router-link to="/changePassword">
      <div class="change">修改密码</div>
    </router-link>
    <router-link to="/item">
      <div class="logout">退出登录</div>
    </router-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Head from '@/components/Head.vue';

  @Component({
    components: {Head}
  })
  export default class Nav extends Vue {
  }
</script>

<style lang="scss" scoped>
  .nav {
    .check {
      background: rgb(0, 192, 239);
    }

    .change {
      background: rgb(0, 166, 90);
    }

    .logout {
      background: rgb(243, 156, 18);
    }

    .check, .logout, .change {
      text-align: center;
      width: 100vw;
      padding: 68px 0;
      color: white;
      font-size: 24px;
    }
  }
</style>