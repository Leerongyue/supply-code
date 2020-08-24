import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Login from '@/views/Login.vue';
import Item from '@/components/Item.vue';
import Detail from '@/components/Detail.vue';
import NotFound from '@/components/NotFound.vue';
import Nav from '@/components/Nav.vue';
import ChangePassword from '@/components/ChangePassword.vue';
import My from '@/components/My.vue';
import store from '../store/index';
import {message} from 'ant-design-vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/item',
    component: Item,
    meta: {requireAuth: true}
  },
  {
    path: '/detail',
    component: Detail,
    meta: {requireAuth: true}
  },
  {
    path: '/nav',
    component: Nav,
    meta: {requireAuth: true}
  },
  {
    path: '/changePassword',
    component: ChangePassword,
    meta: {requireAuth: true}
  },
  {
    path: '/my',
    component: My,
    meta: {requireAuth: true}
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    store.commit('getUser');
    if (!store.state.user) {
      message.info('请先绑定个人信息', 0.6);
      next({
        path: '/login',
        // query: {redirect: to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});

export default router;
