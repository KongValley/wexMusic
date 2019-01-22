import fly from '@/utils/request'

/**
 * 获取每日推荐歌单,可获得每日推荐歌单(需要登录)
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function getRecommendResourceAPI() {
  return fly.request({
    url: '/recommend/resource'
  })
}

/**
 * 获取每日推荐歌曲,可获得每日推荐歌曲(需要登录)
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function getRecommendSongsAPI() {
  return fly.request({
    url: '/recommend/songs'
  })
}

export function getNewAlbumAPI({ limit = 50, offset = 0 }) {
  return fly.request({
    url: '/album',
    body: {
      limit,
      offset
    }
  })
}

export function getNewAlbumDetailAPI({ id, limit = 50, offset = 0 }) {
  return fly.request({
    url: '/album',
    body: {
      id,
      limit,
      offset
    }
  })
}

export function getFirstMvAPI(limit = 30) {
  return fly.request({
    url: '/mv/first',
    body: {
      limit
    }
  })
}

export function getPersonalizedMvAPI() {
  return fly.request({
    url: '/personalized/mv'
  })
}

export function getPersonalizedPlaylistAPI() {
  return fly.request({
    url: '/personalized'
  })
}

export function getPersonalizedNewSongAPI() {
  return fly.request({
    url: '/personalized/newsong'
  })
}

export function getPersonalizedDjProgramAPI() {
  return fly.request({
    url: '/personalized/djprogram'
  })
}

export function getRecommendProgramAPI() {
  return fly.request({
    url: '/program/recommend'
  })
}

export function getPersonalizedPrivatecontentAPI() {
  return fly.request({
    url: '/personalized/privatecontent'
  })
}
