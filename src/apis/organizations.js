import axios from 'axios'

export const getOrganizations = () => {
  return axios.get('https://62fc8fb8b9e38585cd412ba3.mockapi.io/orgnaizations/')
}

export const getOrganization = (id) => {
  return axios.get(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/orgnaizations/${id}`)
}

export const createOrganization = (formData) => {
  return axios.post('https://62fc8fb8b9e38585cd412ba3.mockapi.io/orgnaizations/', formData)
}

export const editOrganization = (id, formData) => {
  return axios.put(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/orgnaizations/${id}`, formData)
}

export const deleteOrganization = (id) => {
  return axios.delete(`https://62fc8fb8b9e38585cd412ba3.mockapi.io/orgnaizations/${id}`)
}
