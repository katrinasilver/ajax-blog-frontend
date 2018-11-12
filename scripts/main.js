const axios = require('axios')
const url = 'https://blog-posting-api.herokuapp.com/posts'
const templates = require('./partials/templates')
// MOVE THE ABOVE TO RENDER.JS LATER!!!

const render = require('./partials/render')

// const { get, remove, update } = require('./partials/posts')

const showForm = document.querySelector('#create')
render.form(showForm)

const postContainer = document.querySelector('#posts')
// render.renderPosts(postContainer, response.data.posts)

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

  notification.innerHTML = 'New article posted! Hooray!'
  notification.classList.remove('hide')
  setTimeout(() => { notification.classList.add('hide') }, 1500)

  // MOVE THIS LATER!
  const postDate = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()

    if (dd < 10) { dd = `0${dd}` }
    if (mm < 10) { mm = `0${mm}` }

    today = `${mm}-${dd}-${yyyy}`

    return today
  }

  let articles = {
    id: '',
    date: postDate(),
    title: e.target.title.value,
    content: e.target.article.value
  }

  axios.post(url, articles).then(response =>  render() )

  const render = () => {
    axios.get(url)
      .then(response => {
        postContainer.innerHTML = ''
        postContainer.innerHTML = response.data.map(a => templates.newPost(a.id, a.date, a.title, a.content)).join('\n')
    })
  }
})

// get()
// .then((response) => {
//   render.renderPosts(postContainer, response.data.data)
// })
