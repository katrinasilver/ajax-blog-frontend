let edit = null
const set = id => edit = id
const get = () => edit
const reset = () => edit = null
module.exports = { set, get, reset }
