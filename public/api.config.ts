const API = {
  VUE_APP_URL: process.env.NODE_ENV === 'production'
    ? 'http://192.168.0.234:9033/'
    : '/demo/'
};
export default API;
