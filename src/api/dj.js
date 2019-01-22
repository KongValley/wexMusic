import fly from '@/utils/request'

export function getDjRecommend() {
  return fly.request({
    url: '/dj/recommend'
  })
}

export function getDjCatelist() {
  return fly.request({
    url: '/dj/catelist'
  })
}

export function getDjRecommendType(type) {
  return fly.request({
    url: '/dj/recommend/type',
    body: {
      type
    }
  })
}

export function subDj(rid, t) {
  return fly.request({
    url: '/dj/sub',
    body: {
      rid,
      t
    }
  })
}

export function getDjPaygift({ limit = 20, offset = 0 }) {
  return fly.request({
    url: '/dj/paygift',
    body: {
      limit,
      offset
    }
  })
}

export function getDjDetail(rid) {
  return fly.request({
    url: '/dj/detail',
    body: {
      rid
    }
  })
}

export function getDjProgram({ rid, limit = 30, offset = 0 }) {
  return fly.request({
    url: '/dj/program',
    body: {
      rid,
      limit,
      offset
    }
  })
}
