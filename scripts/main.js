const render = require('./partials/render')

const createPost = document.querySelector('button.is-link')
const newPost = document.querySelector('.create')
render.form(newPost)

const form = document.querySelector('#form')
createPost.addEventListener('click', (e) => {
  e.preventDefault()
  form.classList.remove('is-hidden')
})
