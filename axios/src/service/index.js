import axios from 'axios'

class HYRequest {
  // 
  constructor(baseURL, timeout=10000) {
    // 创建一个新的实例
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

// 而且可以创建多个实例；用于对数据发送请求
// const HYRequest1 = new HYRequest("http://123.207.32.32:9000")
// const HYRequest2 = new HYRequest("http://123.207.32.32:9002")

export default new HYRequest("http://123.207.32.32:9001")

