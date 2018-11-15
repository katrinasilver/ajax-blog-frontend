const { form, newPost, editPost, recentPost } = require('./templates')
const { notify, eventListener } = require('./utils')
const { set, get, reset } = require('./edit')
const { read, readOne, showRecent, remove, update } = require('./posts')

const addForm = (container) => container.innerHTML = form()

const renderPost = (posts) => {
  const postContainer = document.querySelector('#posts')
  let layout = posts.map(post => post.id === get() ? editPost(post) : newPost(post))

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

const recent = (posts) => {
  const postList = document.querySelector('.menu-list')
  postList.innerHTML = posts.map(post => recentPost(post)).reverse().join('\n')

  eventListener('.post-link a', 'click', (e) => {
    let id = e.target.parentElement.getAttribute('data-pid')
    showRecent()
    readOne(id).then(response => recentPost(response.data))
  })
}

module.exports = { addForm, notify, renderPost, recent }
