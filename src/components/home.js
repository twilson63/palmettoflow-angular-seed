var h = require('hyperscript')

const template = render().outerHTML
const controller = [component]
const controllerAs = 'home'

module.exports = { url: '/', template, controller, controllerAs }

function component () {
  this.foo = 'World'
}

function render (state) {
  return h('h1', ['Hello {{home.foo}}'])
}
