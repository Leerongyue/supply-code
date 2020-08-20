<template>
  <div class="wrapper">
    <div class="login" v-if="!$store.state.user">
      <Head text="三鑫补货系统" left='0'/>
      <div class="bind"><strong>员工登录</strong></div>
      <Input type="text" name="工号" placeholder="请输入工号" v-model="userno"/>
      <Input type="password" name="密码" placeholder="请输入密码" v-model="password"/>
      <Button name="立即登录" @click.native="onLogin">立即登录</Button>
    </div>
    <div v-if="$store.state.user">
      <Head text="三鑫补货系统" left='0' right="1" path="/nav"/>
      <div class="logined">
        <div> {{$store.state.user.userno}}已登录</div>
        <div class="logout" @click="onLogout">退出登录</div>
      </div>

    </div>
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
  import API from '../../public/api.config';

  @Component({
    components: {Head, Button, Input}
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
          {url: API.loginApi, method: 'POST', value: JSON.stringify(value)})
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

    onLogout() {
      this.$store.commit('saveUser', {user: null});
      this.$store.commit('getUser');
      this.injectedValue();
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100vh;
    background: white;
    position: relative;

    .login {
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

    .logined {
      font-size: 24px;
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .logout {
        color: blue;
        margin-top: 12px;
      }
    }
  }

</style>