import request from '@/utils/request'

export function listAllFavorites() {
  return request({
    url: '/api/sys-favorites/list-all',
    method: 'get'
  })
}

export function listArticles(data) {
  console.log("listArticles"+data)
  return request({
    url: '/api/article/list-all',
    method: 'get',
    params: data
  })
}

export function addFavorite(data) {
  return request({
    url: '/api/article-favorite/add',
    method: 'put',
    data
  })
}

export function delArticle(data) {
  return request({
    url: '/api/article/delById',
    method: 'put',
    data
  })
}

