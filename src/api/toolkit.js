import request from '@/utils/request'

export function listAllToolkit() {
  return request({
    url: '/crawler/toolkit/list-all',
    method: 'get'
  })
}
