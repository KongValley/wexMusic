import fly from '@/utils/request'

export function artistList({ cat = 1001, limit = 30, offset = 0, initial = 'a' }) {
  return fly.request({
    url: '/artist/list',
    body: {
      cat,
      limit,
      offset,
      initial
    }
  })
}

export function artistSub(id) {
  return fly.request({
    url: '/artist/sub',
    body: {
      id
    }
  })
}

export function artistUnSub(id) {
  return fly.request({
    url: '/artist/unsub',
    body: {
      id
    }
  })
}

export function artistSublist(id) {
  return fly.request({
    url: '/artist/sublist',
    body: {
      id
    }
  })
}

/**
 * 获取歌手单曲
 *
 * @author Da Peng
 * @export
 * @param {歌手id,可由搜索接口获得} id
 * @returns
 */
export function getArtists(id) {
  return fly.request({
    url: '/artists',
    body: {
      id
    }
  })
}

/**
 * 获取歌手mv
 * 传入歌手id,可获得歌手mv信息,具体mv播放地址可调用/mv传入此接口获得的 mvid 来拿到
 *
 * @author Da Peng
 * @export
 * @param {歌手 id} id
 * @returns
 */
export function getArtistMv(id) {
  return fly.request({
    url: '/artist/mv',
    body: {
      id
    }
  })
}

/**
 * 获取歌手专辑
 * 传入歌手 id, 可获得歌手专辑内容
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, limit = 50, offset = 0 }
 * @param {歌手 id} id
 * @param {取出数量,默认为50} limit
 * @param {偏移数量,用于分页,如:(页数-1)*50,其中50为limit的值,默认为0} offset
 * @returns
 */
export function getArtistAlbum({ id, limit = 50, offset = 0 }) {
  return fly.request({
    url: '/artist/album',
    body: {
      id,
      limit,
      offset
    }
  })
}

/**
 * 获取歌手描述
 *
 * @author Da Peng
 * @export
 * @param {歌手 id} id
 * @returns
 */
export function getArtistDesc(id) {
  return fly.request({
    url: '/artist/desc',
    body: {
      id
    }
  })
}

