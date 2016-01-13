var { curry } = require('ramda')
var { response, responseError } = require('palmettoflow-event')

module.exports = curry((config, ee) => {
  ee.on('/model/all', (e) =>
    ee.emit('send', response(e, []))
  )
})
