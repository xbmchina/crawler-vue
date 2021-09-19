import request from '@/utils/request'

export function listAllStock() {
  return request({
    url: '/crawler/stock-config/list-all',
    method: 'get'
  })
}
