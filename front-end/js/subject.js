var R = require('ramda')

var subject_lens =
    R.lens(
        R.prop('subjects'),
        R.assoc('subject'))

var first_person_lens =
    R.lens(
        R.prop('subjects'),
        R.assoc('first_person'))

module.exports = R.curry((subject_index, insult_data) =>
    R.compose(
        R.omit(['subjects']),
        R.over(
            first_person_lens,
            R.compose(
                R.prop('first_person'),
                R.nth(subject_index))),
        R.over(
            subject_lens,
            R.compose(
                R.prop('part'),
                R.nth(subject_index))))
                    (insult_data))
