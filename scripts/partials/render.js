const templates = require('./templates')

const form = (container) => container.innerHTML = templates.form()
const post = (container) => container.innerHTML = templates.post()

module.exports = {
  form, post
}
