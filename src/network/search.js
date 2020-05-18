import {request} from './request'

export function searchBlog(data) {
  return request({
    method: 'get',
    headers: {
      
    },
    url: '/server/searchblog',
    params: data
  })
}