const eventListener = (selector, type, fn) => {
  const target = document.querySelectorAll(selector)
  target.forEach(t => t.addEventListener(type, fn))
}

const notify = (container, message, time) => {
  const notice = document.querySelector(container)
  notice.innerHTML = message
  notice.classList.remove('hide')
  setTimeout(() => { notice.classList.add('hide') }, time)
}

module.exports = { notify, eventListener }
