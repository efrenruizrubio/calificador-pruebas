import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/results'

const getCount = () => {
  return axios.get(`${baseUrl}/getCount`)
}

const getAll = () => {
  return axios.get(`${baseUrl}/getAll`)
}

const getFiltered = (filter) => {
  return axios.post(`${baseUrl}/getFiltered`, filter)
}

const createResult = newResult => {
  return axios.post(`${baseUrl}/newResult`, newResult)
}

export const resultsService = {
  getCount,
  getAll,
  getFiltered,
  createResult
}
