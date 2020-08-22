<template>
  <Layout class="my">
    <Head text="三鑫补货系统"/>
    <div class="isLogin">
      <div v-if="$store.state.user">{{$store.state.user.userno}}已登录</div>
      <router-link v-if="!$store.state.user" to="/login">立即登录</router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import Head from '@/components/Head.vue';

  @Component({
    components: {Head, Layout}
  })
  export default class My extends Vue {
    created() {
      this.$store.commit('getUser');
    }
  }
</script>

<style lang="scss" scoped>
  .my {
    position: relative;
    font-size: 24px;

    .isLogin {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      a {
        color: rgb(82, 102, 237);
      }
    }
  }

</style>