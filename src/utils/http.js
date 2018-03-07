import axios from 'axios'

//axios 通用配置
let config = {
  baseURL: 'https://www.easy-mock.com/mock/5a3e1d0c3abd5873d2469605/test',
  timeout: 10000
}
const instance = axios.create(config)
// 请求开始加入loading
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
instance.interceptors.response.use((response) => {
  if (response.status === 200) {
      if (Object.prototype.toString.call(response.data) === '[object Object]') {
          if (response.data.code >= 0) {
              const result = response.data.data;
              return Promise.resolve(result);
          }
      }
  }
  const error = response.data || {};
  error.msg = error.msg || '接口调用失败';
  return Promise.reject(error);
}, (err) => {
  const error = err || {};
  error.msg = error.msg || '接口调用失败';
  return Promise.reject(error);
});
export default instance