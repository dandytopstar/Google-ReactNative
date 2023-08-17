import { BASE_URL } from '../config'
import { responseHandler, errorHandler, HEADERS, request } from './helpers'
import { wait } from '../utils'

const DEFAULT_ANALYTICS = [
  {
    type: 'referrals',
    value: 1345,
    percentage: 5,
  },
  {
    type: 'purchase',
    value: 913,
    percentage: -8,
  },
  {
    type: 'calls',
    value: 156,
    percentage: 15,
  },
  {
    type: 'reviews',
    value: 40,
    percentage: -5,
  },
  {
    type: 'rewards',
    value: 10506,
    percentage: 23,
  }
]

export const signUp = (post) => {
  return request('auth/local/register', 'POST', post)
}

export const login = (post) => {
  return request('auth/local', 'POST', post)
}

export const fetchAnalytics = async () => {
  return request('okr2dfllztsmh782mkv7ubmkixf78bag')
}

export const fetchUser = (id = '60d0fe4f5311236168a109cc') => {
  return fetch(`${BASE_URL}/user/${id}`, {method: 'GET', headers: HEADERS})
    .then(responseHandler)
    .catch(errorHandler)
}

export const fetchReviews = () => {
  return fetch(`${BASE_URL}/post`, {method: 'GET', headers: HEADERS})
    .then(responseHandler)
    .catch(errorHandler)
}

export const fetchFeedbacks = () => {
  return fetch(`${BASE_URL}/post`, {method: 'GET', headers: HEADERS})
    .then(responseHandler)
    .catch(errorHandler)
}

export const fetchFeedback = (id) => {
  return fetch(`${BASE_URL}/post/${id}/comment`, {method: 'GET', headers: HEADERS})
    .then(responseHandler)
    .catch(errorHandler)
}

export const fetchNotifications = () => {
  return fetch(`${BASE_URL}/user?limit=3`, {method: 'GET', headers: HEADERS})
    .then(responseHandler)
    .catch(errorHandler)
}

export const fetchRequests = (type) => {
  const page = type === 'active' ? 0 : 1
  return fetch(`${BASE_URL}/user?page=${page}&limit=5`, {method: 'GET', headers: HEADERS})
    .then(responseHandler)
    .catch(errorHandler)
}


