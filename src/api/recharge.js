import request from '@/utils/request'

export function txListHandler(data) {
  return request({
    url: '/transaction?' + data,
    method: 'get'
  })
}
export function opera(data) {
  return request({
    url: `/transaction/${data.id}/status/${data.status}`,
    method: 'put'
  })
}
export function userList(data) {
  return request({
    url: '/account?' + data,
    method: 'get'
  })
}
export function userInfoS(data) {
  return request({
    url: `/account/${data}/balance`,
    method: 'get'
  })
}
export function tokenConfig() {
  return request({
    url: '/config',
    method: 'get'
  })
}
export function modifyTokey(data) {
  return request({
    url: '/config',
    method: 'put',
    data
  })
}
export function addCoin(data) {
  return request({
    url: '/config',
    method: 'post',
    data
  })
}

