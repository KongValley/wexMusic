import fly from '@/utils/request'

/**
 * 邮箱登陆
 *
 * @author Da Peng
 * @export
 * @param {邮箱} email
 * @param {密码} password
 * @returns
 */
export function loginByEmail({ email, password }) {
  return fly.request({
    url: '/login',
    body: {
      email,
      password
    }
  })
}

/**
 * 手机登陆
 *
 * @author Da Peng
 * @export
 * @param {手机号} phone
 * @param {密码} password
 * @returns
 */
export function loginByPhone({ phone, password }) {
  return fly.request({
    url: '/login/cellphone',
    body: {
      phone,
      password
    }
  })
}

/**
 * 刷新登陆状态
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function loginRefresh() {
  return fly.request({
    url: '/login/refresh'
  })
}

/**
 * 获取登陆状态
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function loginStatus() {
  return fly.request({
    url: '/login/status'
  })
}

/**
 * 账号退出登录
 *
 * @author Da Peng
 * @export
 * @returns
 */
export function logout() {
  return fly.request({
    url: '/logout'
  })
}
