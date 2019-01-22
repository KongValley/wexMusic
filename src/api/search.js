import fly from '@/utils/request'

/**
 * 搜索接口,传入搜索关键词可以搜索该音乐/专辑/歌手/歌单/用户
 * 关键词可以多个,以空格隔开
 * 搜索获取的mp3url不能直接用,通过/music/url接口传入歌曲id获取具体的播放链接
 *
 * @author Da Peng
 * @export
 * @param {需要传入一个对象} { keywords, limit = 30, offset = 0, type = 1 }
 * @param {关键词} keywords
 * @param {返回数量,默认为30} limit
 * @param {偏移数量,用于分页,如(页数-1)*30,其中30为limit的值,默认为0} offset
 * @param {搜索类型,默认为1即单曲} type
 * 取值意义-> 1:单曲 10:专辑 100:歌手 1000:歌单 1002: 用户 1004: MV 1006: 歌词 1009: 电台
 * @returns
 */
export function search({ keywords, limit = 30, offset = 0, type = 1 }) {
  return fly.request({
    url: '/search',
    body: {
      keywords,
      limit,
      offset,
      type
    }
  })
}

/**
 * 获取热门搜索列表接口
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function hot() {
  return fly.request({
    url: '/search/hot'
  })
}

/**
 * 搜索建议接口,传入搜索关键词可获得搜索建议
 * 搜索结果同时包含单曲,歌手,歌单,mv信息
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { keywords, limit = 30, offset = 0, type = 1 }
 * @param {关键词} keywords
 * @param {返回数量,默认为30} limit
 * @param {偏移数量,用于分页,如(页数-1)*30,其中30为limit的值,默认为0} offset
 * @param {搜索类型,默认为1即单曲} type
 * 取值意义-> 1:单曲 10:专辑 100:歌手 1000:歌单 1002: 用户 1004: MV 1006: 歌词 1009: 电台
 * @returns
 */
export function suggest({ keywords, limit = 30, offset = 0, type = 1 }) {
  return fly.request({
    url: '/search/suggest',
    body: {
      keywords,
      limit,
      offset,
      type
    }
  })
}

/**
 * 搜索多重匹配接口,传入搜索关键词可获得搜索结果
 *
 * @author Da Peng
 * @export
 * @param {关键词} keywords
 * @returns
 */
export function multimatch(keywords) {
  return fly.request({
    url: '/search/multimatch',
    body: {
      keywords
    }
  })
}
