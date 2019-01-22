import fly from '@/utils/request'

export function getMvData(mvid) {
  return fly.request({
    url: '/mv',
    body: {
      mvid
    }
  })
}

export function getVideoData(id) {
  return fly.request({
    url: '/video',
    body: {
      id
    }
  })
}

export function playMvOrVideo(url) {
  return fly.request({
    url: '/mv/url',
    body: {
      url
    }
  })
}
