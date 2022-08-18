const mongoose = require("mongoose");

const clipSchema = new mongoose.Schema({
    ClipTitle: {
        type: String
    },
    ClipLink: {
        type: String,
        required: true
    },
    startTime: {
        type: Number,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    },
    ClipDesc: {
        type: String
    },
    ClipTag: {
        type: String
    }
})

module.exports = mongoose.model("Clipbit", clipSchema); 