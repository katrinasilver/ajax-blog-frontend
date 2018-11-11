const templates = require('./templates')

const form = (container) => container.innerHTML = templates.form()

module.exports = {
  form
}
