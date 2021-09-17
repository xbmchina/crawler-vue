import request from '@/utils/request'

export function listAllToolkit() {
  return request({
    url: '/api/toolkit/list-all',
    method: 'get'
  })
}
