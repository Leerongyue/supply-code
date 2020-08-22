<template>
  <Layout class="nav">
    <Head text="三鑫补货系统" left="0" path="/login"/>
    <router-link to="/item">
      <Tab name="补货查询" type="setting"/>
    </router-link>
    <Tab name="修改密码" type="form"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Head from '@/components/Head.vue';
  import Tab from '@/components/Tab.vue';
  import DownNav from '@/components/DownNav.vue';
  import Layout from '@/components/Layout.vue';

  @Component({
    components: {Layout, DownNav, Tab, Head}
  })
  export default class Nav extends Vue {
  }
</script>

<style lang="scss" scoped>
  .nav {
    min-height: 100vh;
    font-size: 18px;

    ::v-deep.header {
      margin-bottom: 40px;
    }

    a {
      color: inherit;
    }
  }
</style>