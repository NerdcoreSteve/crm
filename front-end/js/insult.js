//TODO Your mother is elderberries!
var R = require('ramda')
var subject = require('./subject.js')
var verb = require('./verb.js')
var object = require('./object.js')

var insult = (insult_data, subject_index, verb_index, object_index) =>
    R.compose(
        (insult_object) =>
            `${insult_object.subject} ${insult_object.verb} ${insult_object.object}!`,
        object(object_index),
        verb(verb_index),
        subject(subject_index))
            (insult_data)

module.exports = insult
