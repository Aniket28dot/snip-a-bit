const mongoose = require("mongoose");

const podSchema = new mongoose.Schema({
    podTitle: {
        type: String
    },
    podContent: {
        type: String
    },
    podLink: {
        type: String
    },
    podTags: {
        type: String
    }
})

module.exports = mongoose.model("Snipod", podSchema);