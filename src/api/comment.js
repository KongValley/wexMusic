import fly from '@/utils/request'

/**
 * 歌曲评论,传入音乐id和limit参数,可获得该音乐的所有评论(不需要登录)
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, limit = 20, offset = 0 }
 * @param {音乐 id} id
 * @param {取出评论数量,默认为20} limit
 * @param {偏移数量,用于分页,如:(评论页数-1)*20,其中20为limit的值} offset
 * @returns
 */
export function commentMusic({ id, limit = 20, offset = 0 }) {
  return fly.request({
    url: '/comment/music',
    body: {
      id,
      limit,
      offset
    }
  })
}

/**
 * 专辑评论,传入音乐id和limit参数,可获得该专辑的所有评论(不需要登录)
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, limit = 20, offset = 0 }
 * @param {专辑 id} id
 * @param {取出评论数量 , 默认为 20} limit
 * @param {偏移数量,用于分页,如:( 评论页数 -1)*20, 其中20为limit的值} offset
 * @returns
 */
export function commentAlbum({ id, limit = 20, offset = 0 }) {
  return fly.request({
    url: '/comment/album',
    body: {
      id,
      limit,
      offset
    }
  })
}

/**
 * 歌单评论,传入音乐id和limit参数,可获得该歌单的所有评论(不需要登录)
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, limit = 20, offset = 0 }
 * @param {歌单 id} id
 * @param {取出评论数量 , 默认为 20} limit
 * @param {偏移数量,用于分页,如:( 评论页数 -1)*20, 其中20为limit的值} offset
 * @returns
 */
export function commentPlaylist({ id, limit = 20, offset = 0 }) {
  return fly.request({
    url: '/comment/playlist',
    body: {
      id,
      limit,
      offset
    }
  })
}

/**
 * mv评论,传入音乐id和limit参数,可获得该mv的所有评论(不需要登录)
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, limit = 20, offset = 0 }
 * @param {mv id} id
 * @param {取出评论数量 , 默认为 20} limit
 * @param {偏移数量,用于分页,如:( 评论页数 -1)*20, 其中20为limit的值} offset
 * @returns
 */
export function commentMv({ id, limit = 20, offset = 0 }) {
  return fly.request({
    url: '/comment/mv',
    body: {
      id,
      limit,
      offset
    }
  })
}

/**
 * 电台节目评论,传入音乐id和limit参数,可获得该电台节目的所有评论(不需要登录)
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, limit = 20, offset = 0 }
 * @param {电台 id} id
 * @param {取出评论数量 , 默认为 20} limit
 * @param {偏移数量,用于分页,如:( 评论页数 -1)*20, 其中20为limit的值} offset
 * @returns
 * @returns
 */
export function commentDj({ id, limit = 20, offset = 0 }) {
  return fly.request({
    url: '/comment/dj',
    body: {
      id,
      limit,
      offset
    }
  })
}

/**
 * 视频评论,传入音乐id和limit参数,可获得该视频的所有评论(不需要登录)
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, limit = 20, offset = 0 }
 * @param {视频 id} id
 * @param {取出评论数量 , 默认为 20} limit
 * @param {偏移数量,用于分页,如:( 评论页数 -1)*20, 其中20为limit的值} offset
 * @returns
 */
export function commentVideo({ id, limit = 20, offset = 0 }) {
  return fly.request({
    url: '/comment/video',
    body: {
      id,
      limit,
      offset
    }
  })
}

/**
 * 热门评论,传入type,资源id可获得对应资源热门评论(不需要登录)
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, type }
 * @param {资源id} id
 * @param {数字,资源类型,对应歌曲 0 , mv 1 , 歌单 2 , 专辑 3 , 电台 4, 视频 5} type
 * @returns
 */
export function commentHot({ id, type }) {
  return fly.request({
    url: '/comment/hot',
    body: {
      id,
      type
    }
  })
}

/**
 * 给评论点赞,传入 type, 资源 id, 和评论 cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, cid, t, type }
 * @param {资源 id, 如歌曲 id,mv id} id
 * @param {评论 id} cid
 * @param {是否点赞 ,1 为点赞 ,0 为取消点赞} t
 * @param {数字,资源类型,对应歌曲 0 , mv 1 , 歌单 2 , 专辑 3 , 电台 4, 视频 5} type
 * @returns
 */
export function commentLike({ id, cid, t, type }) {
  return fly.request({
    url: '/comment/like',
    body: {
      id,
      cid,
      t,
      type
    }
  })
}

/**
 * 发送评论,可发送评论
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { action, type, id, content }
 * @param {1 发送,0 删除} action
 * @param {数字,资源类型,对应歌曲 0 , mv 1 , 歌单 2 , 专辑 3 , 电台 4, 视频 5} type
 * @param {对应资源id} id
 * @param {要发送的内容} content
 */
export function commentActionAdd({ action, type, id, content }) {
  return fly.request({
    url: '/comment',
    body: {
      action,
      type,
      id,
      content
    }
  })
}

/**
 * 删除评论,可删除评论
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { action, type, id, content }
 * @param {1 发送,0 删除} action
 * @param {数字,资源类型,对应歌曲 0 , mv 1 , 歌单 2 , 专辑 3 , 电台 4, 视频 5} type
 * @param {对应资源id} id
 * @param {评论 id} commentId
 */
export function commentActionDel({ action, type, id, commentId }) {
  return fly.request({
    url: '/comment',
    body: {
      action,
      type,
      id,
      commentId
    }
  })
}

