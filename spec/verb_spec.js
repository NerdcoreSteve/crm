describe('subject', () => {  
    var verb = require('../front-end/js/verb.js')

    it('should leave the subject and first_person properties as they are',
        () => expect(
            verb(
                0,
                {
                    subject: 'Your potato',
                    first_person: false,
                    verbs: [
                        {
                            first_person: 'smell like',
                            third_person: 'smells like',
                            plural: true
                        },
                        {
                            first_person: 'are',
                            third_person: 'is',
                            plural: false
                        },
                        {
                            first_person: 'consort with',
                            third_person: 'consorts with',
                            plural: true
                        },
                    ]
                }).subject)
                    .toEqual('Your potato'))
})
