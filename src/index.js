const express = require('express')
const mongoose = require('mongoose')

const app = express()

const mongoURI = 
'mongodb+srv://admin:passwordpassword@tracker.no5lg.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})
mongoose.connection.on('Error', (err) => {
    console.error('Error connecting to mongo', err)
})


app.get('/', (req, res) => {
    res.send('Hey there!')
})

app.listen(3100, () => {
    console.log('Listening on port 3100')
})