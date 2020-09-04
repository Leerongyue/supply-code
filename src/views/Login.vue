<template>
  <div class="login">
    <div class="wrapper">
      <Icon name="logo"/>
      <Input name="工号" placeholder="请输入工号" v-model="userno"/>
      <Input name="密码" placeholder="请输入密码" v-model="password"/>
      <Button name="立即绑定" @click.native="onLogin" @keyup.enter.native="onLogin">立即绑定</Button>
    </div>
    <div class="copyright">{{copyrightDate}}</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject} from 'vue-property-decorator';
  import Input from '@/components/Input.vue';
  import Button from '@/components/Button.vue';
  import {Md5} from 'md5-typescript';
  import {message} from 'ant-design-vue';
  import Head from '@/components/Head.vue';
  import Layout from '@/components/Layout.vue';
  import dayjs from 'dayjs';

  @Component({
    components: {Layout, Head, Button, Input}
  })
  export default class Login extends Vue {
    @Inject('reload') private injectedValue!: () => void;
    password = '';
    userno = '';

    created() {
      this.$store.commit('getUser');
      const user = this.$store.state.user;
      this.userno = user ? user.userno : '';
      // this.password = user ? user.password : '';
    }

    get copyrightDate() {
      return `Copyright © ${dayjs().year()} Sanxin.All Rights Reserved`;
    }

    onLogin() {
      const value = {
        userno: this.userno,
        pwd: Md5.init(this.password),
      };
      if (this.userno === '') {
        message.info('请输入工号', 0.5);
      } else {
        this.$store.dispatch(
          'login',
          {url: '/sx/order/login', method: 'POST', value: JSON.stringify(value)})
          .then(res => {
            console.log(res);
            if (res.data.err_code === '100') {
              message.info('工号不存在，或密码错误！', 0.5);
              return;
            } else {
              this.$store.commit(
                'saveUser',
                {user: {userno: this.userno}});
              this.$router.push('/nav');
            }
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/style/login";
</style>