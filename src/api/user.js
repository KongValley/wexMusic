import fly from '@/utils/request'

/**
 * 获取用户详情
 *
 * @author Da Peng
 * @export
 * @param {用户id} uid
 * @returns
 */
export function getUserDetail(uid) {
  return fly.request({
    url: '/user/detail',
    body: uid
  })
}

/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function getUserSubcount() {
  return fly.request({
    url: '/user/subcount'
  })
}

/**
 * 更新用户信息
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { gender, birthday, nickname, province, city, signature }
 * @param {性别 0:保密 1:男性 2:女性} gender
 * @param {出生日期,时间戳 unix timestamp} birthday
 * @param {用户昵称} nickname
 * @param {省份id} province
 * @param {城市id} city
 * @param {用户签名} signature
 * @returns
 */
export function updateUserDetail({ gender, birthday, nickname, province, city, signature }) {
  return fly.request({
    url: '/user/update',
    body: {
      gender,
      birthday,
      nickname,
      province,
      city,
      signature
    }
  })
}

/**
 * 获取用户歌单,传入用户id,可以获取用户歌单
 *
 * @author Da Peng
 * @export
 * @param {用户 id} uid
 * @returns
 */
export function getUserPlaylist(uid) {
  return fly.request({
    url: '/user/playlist',
    body: {
      uid
    }
  })
}

/**
 * 更新歌单信息
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { id, name, desc, tags }
 * @param {歌单id} id
 * @param {歌单名字} name
 * @param {歌单描述} desc
 * @param {歌单tag} tags
 * @returns
 */
export function updateUserPlaylistDetail({ id, name, desc, tags }) {
  return fly.request({
    url: '/playlist/update',
    body: {
      id,
      name,
      desc,
      tags
    }
  })
}

/**
 * 发送私信
 * 传入用户id和要发送的信息,可以发送私信
 * 返回内容为历史私信,包含带歌单的私信信息
 * (注:不能发送私信给自己)
 *
 * @author Da Peng
 * @export
 * @param {*} { user_ids, msg }
 * @param {用户 id,多个需用逗号隔开} user_ids
 * @param {要发送的信息} msg
 * @returns
 */
export function sendText({ user_ids, msg }) {
  return fly.request({
    url: '/send/text',
    body: {
      user_ids,
      msg
    }
  })
}

/**
 * 发送私信(带歌单)
 * 传入用户 id 和要发送的信息和歌单 id
 * 可以发送带歌单的私信(注:不能发送重复的歌单)
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { user_ids, msg, playlist }
 * @param {用户 id,多个需用逗号隔开} user_ids
 * @param {要发送的信息} msg
 * @param {歌单 id} playlist
 * @returns
 */
export function sendTextAndPlaylist({ user_ids, msg, playlist }) {
  return fly.request({
    url: '/send/playlist',
    body: {
      user_ids,
      msg,
      playlist
    }
  })
}

/**
 * 获取用户电台,传入用户id,可以获取用户电台
 *
 * @author Da Peng
 * @export
 * @param {用户 id} uid
 * @returns
 */
export function getUserDj(uid) {
  return fly.request({
    url: '/user/dj',
    body: {
      uid
    }
  })
}

/**
 * 获取用户关注列表
 * 传入用户 id, 可以获取用户关注列表
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { uid, limit = 30, offset = 0 }
 * @param {用户 id} uid
 * @param {返回数量,默认为 30} limit
 * @param {偏移数量,用于分页,如:(页数-1)*30,其中30为limit的值,默认为 0} offset
 * @returns
 */
export function getUserFollows({ uid, limit = 30, offset = 0 }) {
  return fly.request({
    url: '/user/follows',
    body: {
      uid,
      limit,
      offset
    }
  })
}

/**
 * 获取用户粉丝列表
 * 传入用户 id, 可以获取用户粉丝列表
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { uid, limit = 30, offset = 0 }
 * @param {用户 id} uid
 * @param {返回数量,默认为 30} limit
 * @param {偏移数量,用于分页,如:(页数-1)*30,其中30为limit的值,默认为 0} offset
 * @returns
 */
export function getUserFolloweds({ uid, limit = 30, offset = 0 }) {
  return fly.request({
    url: '/user/followeds',
    body: {
      uid,
      limit,
      offset
    }
  })
}

/**
 * 获取用户动态
 * 传入用户 id, 可以获取用户动态
 *
 * @author Da Peng
 * @export
 * @param {用户 id} uid
 * @returns
 */
export function getUserEvent(uid) {
  return fly.request({
    url: '/user/event',
    body: {
      uid
    }
  })
}

/**
 * 获取用户播放记录
 * 传入用户 id, 可获取用户播放记录
 *
 * @author Da Peng
 * @export
 * @param {传入一个对象} { uid, type = 1 }
 * @param {用户 id} uid
 * @param { type=1 时只返回 weekData, type=0 时返回 allData} type
 * @returns
 */
export function getUserRecord({ uid, type = 1 }) {
  return fly.request({
    url: '/user/record',
    body: {
      uid,
      type
    }
  })
}

/**
 * 获取动态消息
 * 获取各种动态 , 对应网页版网易云，朋友界面里的各种动态消息 ，如分享的视频，音乐，照片等
 * 参数暂时未知
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function getUserEventMessage() {
  return fly.request({
    url: '/event'
  })
}

/**
 * 私人FM(需要登录)
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function getPersonalFm() {
  return fly.request({
    url: '/personal_fm'
  })
}

/**
 * 签到,传入签到类型 ( 可不传 , 默认安卓端签到 ), 可签到 ( 需要登录 )
 * 其中安卓端签到可获得 3 点经验 , web/PC 端签到可获得 2 点经验
 *
 * @author Da Peng
 * @export
 * @param {签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到} type
 * @returns
 */
export function dailySignin(type = 0) {
  return fly.request({
    url: '/daily_signin',
    body: {
      type
    }
  })
}

export function likeMusic({ id, like = true }) {
  return fly.request({
    url: '/like',
    body: {
      id,
      like
    }
  })
}

export function fmTransh(id) {
  return fly.request({
    url: '/fm_trash',
    body: {
      id
    }
  })
}

export function getUserCloud() {
  return fly.request({
    url: '/user/cloud'
  })
}
