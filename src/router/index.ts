import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Login from '@/views/Login.vue';
import Item from '@/components/Item.vue';
import Detail from '@/components/Detail.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/item',
    component: Item
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
