var R = require('ramda')

module.exports = R.curry((min, max) => Math.round(Math.random() * (max - min) + min))
