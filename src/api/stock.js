import request from '@/utils/request'

export function listAllStock() {
  return request({
    url: '/api/stock-config/list-all',
    method: 'get'
  })
}
