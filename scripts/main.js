const render = require('./partials/render')

const post = document.querySelector('#posts')
render.post(post)

const showForm = document.querySelector('#create')
render.form(showForm)

const button = document.querySelector('button.is-link')
const form = document.querySelector('#form')
const notification = document.querySelector('#notification')

button.addEventListener('click', (e) => {
  e.preventDefault()
  form.classList.remove('is-hidden')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  form.classList.add('is-hidden')
  render.post(notification)

  notification.innerHTML = 'New Post! Created'
  notification.classList.remove('hide')

  setTimeout(() => { notification.classList.add('hide') }, 1500)

  render.post(post)
})
