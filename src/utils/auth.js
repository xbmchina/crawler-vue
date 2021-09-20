import request from '@/utils/request'

export function getToken(data) {
  return request({
    url: '/crawler/sys-user/get-token',
    method: 'get',
    params: data
  })
}
