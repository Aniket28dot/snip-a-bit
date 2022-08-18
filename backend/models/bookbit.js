const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String
    },
    bitTitle: {
        type: String
    },
    bitContent: {
        type: String,
        required: true
    },
    chapter: {
        type: String
    },
    genre: {
        type: String
    }
})

module.exports = mongoose.model("Bookbit", bookSchema);