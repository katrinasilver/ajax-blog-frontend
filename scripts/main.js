const { addForm, renderPost } = require('./partials/render')
const { create, read } = require('./partials/posts')
const { notify, eventListener } = require('./partials/utils')

addForm(document.querySelector('#create'))

eventListener('button.is-link', 'click', (e) => {
  e.preventDefault()
  document.querySelector('#form').classList.remove('is-hidden')
})

eventListener('.cancel-post', 'click', (e) => {
  e.preventDefault()
  document.querySelector('#form').classList.add('is-hidden')
})

eventListener('#form', 'submit', (e) => {
  e.preventDefault()
  e.target.classList.add('is-hidden')

  const article = {
    id: '',
    date: '',
    author: e.target.author.value,
    title: e.target.title.value,
    content: e.target.article.value
  }

  create(article)
    .then(read)
    .then(response => {
      renderPost(response.data)
      notify('#notice', 'New article posted! Hooray!', 1500)
    })
    .catch(error => notify('#notice', 'All Fields are Required', 2000))

  e.target.reset()
})

read().then(response => renderPost(response.data))
