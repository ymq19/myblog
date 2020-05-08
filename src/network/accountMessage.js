import {request} from './request'

export function accountMessage(data) {
  return request({
    method: 'get',
    headers: {
      
    },
    url: '/server/accountmessage',
    params: data
  })
}