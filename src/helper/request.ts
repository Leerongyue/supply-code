import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const url = process.env.VUE_APP_URL;
axios.defaults.baseURL = url;

type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head'
  | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put'
  | 'PUT' | 'patch' | 'PATCH' | 'link' | 'LINK' | 'unlink' | 'UNLINK'

export function request(url: string, method: Method, data: {}) {
  return new Promise((resolve, reject) => {
    axios({url, data, method}).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

