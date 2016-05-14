var R = require('ramda')

var object_lens =
    R.lens(
        R.prop('objects'),
        R.assoc('object'))

module.exports = R.curry((object_index, insult_data) =>
    R.compose(
        R.over(
            object_lens,
            R.nth(object_index)))
                (insult_data))
