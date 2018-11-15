const { addForm, renderPost, recent, notify } = require('./partials/render')
const { create, read, readOne, showRecent } = require('./partials/posts')

addForm(document.querySelector('#create'))

document.querySelector('button.is-link').addEventListener('click', (e) => {
  e.preventDefault()
  form.classList.remove('is-hidden')
})

document.querySelector('.cancel-post').addEventListener('click', (e) => {
  e.preventDefault()
  form.classList.add('is-hidden')
})

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  form.classList.add('is-hidden')

  const article = {
    id: '', date: '',
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

  form.reset()
})

read().then(response => renderPost(response.data))
// readOne(id?).then(response => renderPost(response.data))
showRecent().then(response => recent(response.data))
