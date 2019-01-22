import fly from '@/utils/request'

/**
 * 获取音乐url
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} {id,br = 999000}
 * @param {音乐id} id
 * @param {码率,默认设置了999000 即最大码率,如果要320k则可设置为320000,其他类推} br
 * @returns
 */
export function getMusicUrl({ id, br = 999000 }) {
  return fly.request({
    url: '/music/url',
    body: {
      id,
      br
    }
  })
}

/**
 * 检查音乐是否可用
 *
 * @author Da Peng
 * @export
 * @param {音乐id} id
 * @returns
 */
export function checkMusic(id) {
  return fly.request({
    url: '/check/music',
    body: {
      id
    }
  })
}

/**
 * 获取歌词,传入音乐id可获得对应音乐的歌词(不需要登录)
 *
 * @author Da Peng
 * @export
 * @param {音乐id} id
 * @returns
 */
export function getMusicLyric(id) {
  return fly.request({
    url: '/lyric',
    body: {
      id
    }
  })
}

/**
 * 获取歌曲详情
 * 传入音乐id,可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)
 *
 * @author Da Peng
 * @param {音乐 id} ids
 * @export
 */
export function getSongDetail(ids) {
  return fly.request({
    url: '/song/detail',
    body: {
      ids
    }
  })
}

/**
 * 获取专辑内容
 * 传入专辑 id, 可获得专辑内容
 *
 * @author Da Peng
 * @export
 * @param {专辑 id} id
 * @returns
 */
export function getAlbum(id) {
  return fly.request({
    url: '/album',
    body: {
      id
    }
  })
}
