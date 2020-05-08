import {request} from './request'

export function addLike(data) {
  return request({
    method: 'get',
    headers: {
    
    },
    url: '/server/addlike',
    params: data
  })
}