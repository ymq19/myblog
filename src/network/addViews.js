import {request} from './request'

export function addViews(id) {
  return request({
    method: 'get',
    headers: {
    
    },
    url: '/server/addviews',
    params: {
      id
    }
  })
}