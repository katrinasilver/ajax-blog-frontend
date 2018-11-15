const axios = require('axios')
const url = 'https://blog-posting-api.herokuapp.com/posts/'

const create = (content) => axios.post(url, content)
const read = () => axios.get(url)
const readOne = (id) => axios.get(url + id )
const showRecent = () => axios.get(url + `?limit=5`)
const remove = (id) => axios.delete(url + id)
const update = (id, author, title, content) => {
  const post = { id, author, title, content }
  return axios.patch(url + id, post)
}

module.exports = { create, read, readOne, showRecent, update, remove }
