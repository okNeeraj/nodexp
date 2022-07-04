const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    year: Number,
    subjects: [String],
})

module.exports = mongoose.model("User", userSchema)
