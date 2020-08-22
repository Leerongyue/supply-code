<template>
  <div class="nav">
    <Head text="三鑫补货系统" left="1" path="/login"/>
    <router-link to="/item">
      <div class="check">补货查询</div>
    </router-link>
    <div class="change">修改密码</div>
    <div class="logout" @click="logout">退出登录</div>
    <div class="copyright">三鑫科技 @2020 copyright All rights reserved</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Head from '@/components/Head.vue';

  @Component({
    components: {Head}
  })
  export default class Nav1 extends Vue {
    logout() {
      this.$store.commit('saveUser', {user: null});
      this.$router.replace('/login');
    }
  }

</script>

<style lang="scss" scoped>
  .nav {
    background: white;

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
      width: 90vw;
      padding: 68px 0;
      color: white;
      font-size: 24px;
      margin: 16px auto;
    }

    .copyright {
      text-align: center;
      margin-top: 64px;
    }
  }
</style>