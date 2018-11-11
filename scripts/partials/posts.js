const axios = require('axios')
const url = 'https://blog-posting-api.herokuapp.com/posts'

const create = (title, content) => {
  let post = { title, content }
  return axios.post(url, post)
}

const get = () => axios.get(url)

const update = (id, title, content) => {
  const post = { title, content }
  return axios.put(url + id, post)
}

const remove = (id) => axios.delete(url + id)

module.exports = { get, create, remove, update }
