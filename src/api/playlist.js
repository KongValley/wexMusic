import fly from '@/utils/request'

/**
 * 歌单分类,包含 category 信息
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function getCatlistAPI() {
  return fly.request({
    url: '/playlist/catlist'
  })
}

/**
 * 热门歌单分类,包含 category 信息
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function getPlaylistHotAPI() {
  return fly.request({
    url: '/playlist/hot'
  })
}

/**
 * 歌单 ( 网友精选碟 )
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { order = 'hot', tag = '全部', limit = 10 }
 * @param {可选值为'new'和'hot',分别对应最新和最热,默认为'hot'} order
 * @param {比如"华语"、"古风"、"欧美"、"流行",默认为"全部",可从歌单分类接口获取(/playlist/catlist)} tag
 * @param {取出歌单数量, 默认为20} limit
 * @returns
 */
export function getPlaylistTopAPI({ order = 'hot', tag = '全部', limit = 20 }) {
  return fly.request({
    url: '/top/playlist',
    body: {
      order,
      tag,
      limit
    }
  })
}

/**
 * 获取精品歌单
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { tag = '全部', limit = 10 }
 * @param {比如"华语"、"古风"、"欧美"、"流行",默认为"全部",可从歌单分类接口获取(/playlist/catlist)} tag
 * @param {取出歌单数量,默认为20} limit
 * @returns
 */
export function getPlaylistHighqualityAPI({ tag = '全部', limit = 20 }) {
  return fly.request({
    url: '/top/playlist/highquality',
    body: {
      tag,
      limit
    }
  })
}

/**
 * 相关歌单推荐
 *
 * @author Da Peng
 * @export
 * @param {歌单id} id
 * @returns
 */
export function getPlaylistRelatedAPI(id) {
  return fly.request({
    url: '/related/playlist',
    body: {
      id
    }
  })
}

/**
 * 获取歌单详情
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, s = 3 }
 * @param {歌单id} id
 * @param {歌单最近的s个收藏者,设置默认值为3} s
 * @returns
 */
export function getPlaylistDetailAPI({ id, s = 3 }) {
  return fly.request({
    url: '/playlist/detail',
    body: {
      id,
      s
    }
  })
}

/**
 * 新建歌单接口
 *
 * @author Da Peng
 * @export
 * @param {歌单名} name
 * @returns
 */
export function getPlaylistCreateAPI(name) {
  return fly.request({
    url: '/playlist/create',
    body: {
      name
    }
  })
}

/**
 * 收藏/取消收藏歌单
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, t }
 * @param {歌单id} id
 * @param {类型,1:收藏,2:取消收藏} t
 * @returns
 */
export function getPlaylistSubScribeAPI({ id, t }) {
  return fly.request({
    url: '/playlist/subscribe',
    body: {
      id,
      t
    }
  })
}

/**
 * 对歌单添加或删除歌曲
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { op, pid, tracks }
 * @param {从歌单增加单曲为 add, 删除为 del} op
 * @param {歌单 id} pid
 * @param {歌曲 id,可多个,用逗号隔开} tracks
 * @returns
 */
export function getPlaylistTracksAPI({ op, pid, tracks }) {
  return fly.request({
    url: '/playlist/tracks',
    body: {
      op,
      pid,
      tracks
    }
  })
}
