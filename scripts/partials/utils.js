const eventListener = (selector, type, fn) => {
  const target = document.querySelectorAll(selector)
  target.forEach(t => t.addEventListener(type, fn))
}
module.exports = { eventListener }
