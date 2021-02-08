import axios from 'axios'

export const get = async path => {
  console.log(path)
  return axios.get(path)
  //    return response
}

export const post = (path, data) => {
  return axios.post(path, data)
}
