const render = require('./partials/render')
const { create, get, remove, update } = require('./partials/posts')

const showForm = document.querySelector('#create')
render.form(showForm)

const postContainer = document.querySelector('#posts')
const button = document.querySelector('button.is-link')
const notification = document.querySelector('#notification')
const form = document.querySelector('#form')


button.addEventListener('click', (e) => {
  e.preventDefault()
  form.classList.remove('is-hidden')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  form.classList.add('is-hidden')

  notification.innerHTML = 'New article posted! Hooray!'
  notification.classList.remove('hide')
  setTimeout(() => { notification.classList.add('hide') }, 1500)

  let article = {
    id: '', date: '',
    author: e.target.author.value,
    title: e.target.title.value,
    content: e.target.article.value
  }

  create(article)
    .then(response => get())
    .then(response => {
      render.renderPost(postContainer, response.data)
    })

})

get()
  .then(response => {
    render.renderPost(postContainer, response.data)
  })
