import {request} from './request'

export function viewDetail(data) {
  return request({
    method: 'get',
    headers: {
    
    },
    url: '/server/viewdetail',
    params: data
  })
}