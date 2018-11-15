const templates = require('./templates')
const { eventListener } = require('./utils')
const { set, get, reset } = require('./edit')
const { read, remove, update } = require('./posts')

const form = (container) => container.innerHTML = templates.form()

const notify = (container, message, time) => {
  const notice = document.querySelector(container)
  notice.innerHTML = message
  notice.classList.remove('hide')
  setTimeout(() => { notice.classList.add('hide') }, time)
}

const renderPost = (posts) => {
  const postContainer = document.querySelector('#posts')
  let layout = posts.map(post => post.id === get() ? templates.editPost(post) : templates.newPost(post))

  postContainer.innerHTML = ''
  postContainer.innerHTML = layout.reverse().join('\n')

  eventListener('.delete-post', 'click', (e) => {
    e.preventDefault()
    let id = e.target.parentElement.getAttribute('data-id')
    remove(id)
      .catch(error => notify('#notice', 'Post cannot be deleted!', 2000))
    .finally(() => {
      read().then(response => renderPost(response.data))
    })
  })

  eventListener('.edit-post', 'click', (e) => {
    e.preventDefault()
    let id = e.target.parentElement.getAttribute('data-id')
    set(id)
    read().then(response => renderPost(response.data))
  })

  eventListener('.cancel', 'click', (e) => {
    reset()
    read().then(response => renderPost(response.data))
  })

  eventListener('article > form', 'submit', (e) => {
    e.preventDefault()
    const id = e.target.parentElement.getAttribute('data-id')
    const author  = e.target.author.value
    const title  = e.target.title.value
    const content  = e.target.article.value

    update(id, author, title, content)
    .then((response) => {
      reset()
      return read()
    })
    .then(response => renderPost(response.data))
    .catch(error => notify('#notice', 'You can\'t do that -_-', 2000))
  })

}

module.exports = {
  form,
  notify,
  renderPost
}
