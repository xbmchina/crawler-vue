import request from '@/utils/request'

export function listAllFavorites() {
  return request({
    url: '/crawler/sys-favorites/list-all',
    method: 'get'
  })
}

export function listArticles(data) {
  console.log("listArticles"+data)
  return request({
    url: '/crawler/article/list-all',
    method: 'get',
    params: data
  })
}

export function addFavorite(data) {
  return request({
    url: '/crawler/article-favorite/add',
    method: 'put',
    data
  })
}

export function delFavorite(data) {
  return request({
    url: '/crawler/article-favorite/del',
    method: 'delete',
    data
  })
}

export function delArticle(data) {
  return request({
    url: '/crawler/article/delById',
    method: 'put',
    data
  })
}

export function listQuintessence(data) {
  console.log("listArticles"+data)
  return request({
    url: '/crawler/article/list-quintessence',
    method: 'get',
    params: data
  })
}