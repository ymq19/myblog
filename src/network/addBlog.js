import {request} from './request'

export function addBlog(data) {
  return request({
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    url: '/server/addblog',
    data: data
  })
}