import axios from 'axios'
export default {
  async getData (url, config) {
    const res = await axios({
      url,
      method: config.method,
      baseURL: config.baseURL,
      data: config.data
    }).then(res => {
      console.log(config.data)
      console.log(res)
      return res.data
    })
    console.log(res)
  }

}

// console.log(res)
