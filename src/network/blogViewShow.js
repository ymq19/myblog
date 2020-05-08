import {request} from './request'

export function blogViewShow(page) {
  return request({
    method: 'get',
    headers: {
      
    },
    url: '/server/blogviewshow',
    params: {
      page
    }
  })
}