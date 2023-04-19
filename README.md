# axios
## 重要点
1. 创建多个不同的实例来发送网络请求；不同的实例中可以传入多个不同的配置；
  - 使用axios.create() 
  - 针对不同的网络请求来发送实例
2. axios的拦截器
  - 请求拦截
    - axios.interceptors.request.use(请求成功回调拦截, 请求失败回调拦截)
      - 两个回调拦截；
        - 请求成功的回调拦截；在里面可以配置很多操作（设置loading动画）；最后需要return config
        - 请求失败的回调拦截；最后return error
  - 响应拦截
    - axios.interceptors.response.use(请求成功回调拦截, 请求失败回调拦截)
      - 两个回调拦截
        - 请求成功的回调拦截；在里面可以配置很多操作（结束loading动画）；最后需要return res.data
        - 请求失败的回调拦截；最后return error
        
3. axios的二次封装
        
![axios](./picture/axios.png)
