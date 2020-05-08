import {request} from './request'

export function addImage(formdata) {
  return request({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: '/server/addimage',
    data: formdata
  })
}