const mongose = require('mongoose')
const bcrypt = require('bcrypt')

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

 // Salting and Hashing
userSchema.pre('save', function(next) {
    const user = this
    if (!user.isModified('password')) {
         return next()
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
              return next(err)
            }
            user.password = hash
            next()
        })
    })
})

// Automated password checking process
userSchema.methods.comparePassword = function(candidatePassword) {
    const user = this

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err)
            }
             
            if (!isMatch) {
                return reject(false)
            }

            resolve(true)
        })
    })

}

mongose.model('User', userSchema)