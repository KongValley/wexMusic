// MARK 第三方接口
import fly from '@/utils/request'
/**
 * 诗词API接口
 */
export const getShiCiAPI = () => fly.request({
  baseURL: 'https://v2.jinrishici.com/one.json?client=mini-progrram-sdk/1.0',
  url: ''
})
