const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://admin-aniket:anibha@dailyjournal.t3bwl.mongodb.net/postDB', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db