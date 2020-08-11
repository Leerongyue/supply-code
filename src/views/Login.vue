<template>
  <div class="login">
    <div class="bind"><strong>员工登录</strong></div>
    <Input type="text" name="工号" placeholder="请输入工号" v-model="userno"/>
    <Input type="password" name="密码" placeholder="请输入密码" v-model="password"/>
    <Button name="立即登录" @click.native="onLogin">立即登录</Button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Input from '@/components/Input.vue';
  import Button from '@/components/Button.vue';
  import {Md5} from 'md5-typescript';
  import {message} from 'ant-design-vue';

  @Component({
    components: {Button, Input}
  })
  export default class Login extends Vue {
    password = '';
    userno = '';

    onLogin() {
      const value = {
        userno: this.userno,
        pwd: Md5.init(this.password)
      };
      if (this.userno === '') {
        message.info('请输入工号', 0.5);
      } else if (this.password === '') {
        message.info('请输入密码', 0.5);
      } else {
        this.$store.dispatch(
          'login',
          {url: '/login', method: 'POST', value: JSON.stringify(value)})
          .then(res => {
            console.log(res);
          });
        this.$router.push('/item');
      }

    }
  }
</script>

<style lang="scss" scoped>
  .login {
    height: 100vh;
    background: white;

    .bind {
      text-align: center;
      padding: 16px 0;
      background: white;
      margin-bottom: 4px;
    }

    ::v-deep button {
      border-radius: 4px;
    }

    ::v-deep .btn {
      margin: 0 32px;
    }
  }
</style>