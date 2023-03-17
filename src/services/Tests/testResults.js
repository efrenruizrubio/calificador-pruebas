import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/results'

export const getAll = () => {
  return axios.get(baseUrl)
}

export const createResult = newResult => {
  return axios.post(baseUrl, newResult)
}
