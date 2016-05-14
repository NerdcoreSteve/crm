var R = require('ramda')

var verb_lens =
    R.lens(
        R.prop('verbs'),
        R.assoc('verb'))

module.exports = R.curry((verb_index, insult_data) =>
    R.compose(
        R.omit(['verbs']),
        R.assoc('plural', insult_data.verbs[verb_index].plural),
        R.over(
            verb_lens,
            R.compose(
                R.ifElse(
                    () => insult_data.first_person,
                    R.prop('first_person'),
                    R.prop('third_person')),
                R.nth(verb_index))))
                    (insult_data))
