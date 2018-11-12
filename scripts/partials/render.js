const templates = require('./templates')
const posts = require('./posts')

const form = (container) => container.innerHTML = templates.form()

const renderPost = (container, data) => {
  container.innerHTML = ''
  container.innerHTML = data.map(a => templates.newPost(a.id, a.date, a.author, a.title, a.content)).reverse().join('\n')
}

module.exports = {
  form,
  renderPost
}
