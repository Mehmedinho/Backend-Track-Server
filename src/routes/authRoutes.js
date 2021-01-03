const express = require('express')
const mongoose = require('mongoose')
const user = mongoose.model('user')

const router = express.Router()

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.send('You made a post request')
})

module.exports = router

 