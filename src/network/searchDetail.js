import {request} from './request'

export function searchDetail(data) {
  return request({
    method: 'get',
    headers: {
    
    },
    url: '/server/searchdetail',
    params: data
  })
}