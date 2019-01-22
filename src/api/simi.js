import fly from '@/utils/request'
/**
 * 获取相似歌手,传入歌手 id, 可获得相似歌手
 *
 * @author Da Peng
 * @export
 * @param {歌手 id} id
 * @returns
 */
export function getSimiArtist(id) {
  return fly.request({
    url: '/simi/artist',
    body: {
      id
    }
  })
}

/**
 * 获取相似歌单,传入歌曲 id, 可获得相似歌单
 *
 * @author Da Peng
 * @export
 * @param {歌曲 id} id
 * @returns
 */
export function getSimiPlaylist(id) {
  return fly.request({
    url: '/simi/palylist',
    body: {
      id
    }
  })
}

/**
 * 相似 mv,传入 mv id 可获取相似 mv
 *
 * @author Da Peng
 * @export
 * @param {mv id} mvid
 * @returns
 */
export function getSimiMv(mvid) {
  return fly.request({
    url: '/simi/mv',
    body: {
      mvid
    }
  })
}

/**
 * 获取相似音乐,传入歌曲 id, 可获得相似歌曲
 *
 * @author Da Peng
 * @export
 * @param {歌曲 id} id
 * @returns
 */
export function getSimiSong(id) {
  return fly.request({
    url: '/simi/song',
    body: {
      id
    }
  })
}

/**
 * 获取最近 5 个听了这首歌的用户,传入歌曲 id, 获取最近 5 个听了这首歌的用户
 *
 * @author Da Peng
 * @export
 * @param {歌曲 id} id
 * @returns
 */
export function getSimiUser(id) {
  return fly.request({
    url: '/simi/user',
    body: {
      id
    }
  })
}
