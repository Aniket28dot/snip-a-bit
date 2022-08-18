const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    // authorName: {
    //     type: String
    // },
    title: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String
    }
    // source: {
    //     type: String
    // }
});

module.exports = mongoose.model("Blogbit", blogSchema);