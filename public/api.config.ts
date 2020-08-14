const API = {
  loginApi: '/login',
  getItemApi: '/goods/shophz/',
  getDetailApi: '/goods/ordermx',
  VUE_APP_URL: process.env.NODE_ENV === 'production'
    ? 'http://192.168.0.234:9003/sx/order/'
    : '/demo/sx/order/'
};
export default API;