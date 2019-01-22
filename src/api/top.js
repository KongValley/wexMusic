import fly from '@/utils/request'

export function getTopMv({ limit = 30, offset = 0 }) {
  return fly.request({
    url: '/top/mv',
    body: {
      limit,
      offset
    }
  })
}

export function getTopArtists({ limit = 50, offset = 0 }) {
  return fly.request({
    url: '/top/artists',
    body: {
      limit,
      offset
    }
  })
}

export function getTopList(idx) {
  return fly.request({
    url: '/top/list',
    body: {
      idx
    }
  })
}

export function getToplistArtist() {
  return fly.request({
    url: '/toplist/artist'
  })
}
