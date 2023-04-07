import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/results'

const getAll = () => {
  return axios.get(baseUrl)
}

const createResult = newResult => {
  return axios.post(baseUrl, newResult)
}

export const resultsService = {
  getAll,
  createResult
}
