const templates = require('./templates')
const { get, remove, update } = require('./posts')

const form = (container) => container.innerHTML = templates.form()

const renderPost = (container, data) => {
  const layout = data.map(post => templates.newPost(post)).join('\n')
  container.innerHTML = ''
  container.innerHTML = layout
}

module.exports = {
  form,
  renderPost
}
