import {request} from './request'

export function toLogin(data) {
  return request({
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    url: '/server/login',
    data: data
  })
}