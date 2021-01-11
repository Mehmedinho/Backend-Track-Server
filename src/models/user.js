const mongose = require('mongoose')

const userSchema = new mongose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mongose.model('User', userSchema)