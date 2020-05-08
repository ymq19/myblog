import {request} from './request'

export function toRegister(data) {
  return request({
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    url: '/server/register',
    data: data
  })
}