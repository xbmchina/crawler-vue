import request from '@/utils/request'

export function listDayEnglish() {
  return request({
    url: '/crawler/day-english/list-one',
    method: 'get'
  })
}
