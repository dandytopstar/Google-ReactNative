import { API_URL } from '../config'
import store from '../store'

export const responseHandler = async (response) => {
  const contentType = response.headers.get('content-type')
  console.log('contentType', contentType)
  switch (contentType) {
    case 'application/json':
    case 'application/json; charset=utf-8':
      const json = await response.json()
      return json
    default:
      const string = await response.text()
      console.log(string)
      return JSON.parse(string)
  }
}

export const errorHandler = (error) => {
  console.log('errorHandler', error)
  return error
}

export const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'ApiKey': 'LocomMobileAPP',
  // 'app-id': '64a968fe253da56f0dd97cf7',
}

const queryBuilder = (data) => {
  const params = new URLSearchParams()
  for (const key in data) {
    if (data[key] != null) {
      if (typeof data[key] == 'object') {
        for (const value of data[key]) {
          params.append(key, value)
        }
      } else {
        params.append(key, data[key])
      }
    }
  }
  return `?${params}`
}

export const request = (url, method = 'GET', data) => {
  const token = store.getState().$auth.token
  const options = {
    method: method,
    headers: {
      ...HEADERS,
      ...(token ? {Authorization: `Bearer ${store.getState().$auth.token}`} : null),
    },
  }

  let query = ''

  if (data) {
    if (method === 'GET') {
      query = queryBuilder(data)
    } else {
      options.body = JSON.stringify({key: 'LocomMobileAPP', ...data})
    }
  }
  return fetch(`${API_URL}/${url}${query}`, options)
    .then(responseHandler)
    .catch(errorHandler)
}