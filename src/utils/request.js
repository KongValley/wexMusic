var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

const BASEURL = 'http://47.107.32.22:3000'
const TIMEOUT = 5000
const METHOD = 'GET'

fly.config.baseURL = BASEURL
fly.config.timeout = TIMEOUT
fly.config.method = METHOD

fly.interceptors.request.use(config => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return config
}, error => {
  console.log('error' + error)
  return Promise.reject(error)
})

fly.interceptors.response.use(response => {
  wx.hideLoading()
  return response
}, error => {
  console.log('error' + error)
  wx.hideLoading()
  return Promise.reject(error)
})

export default fly
