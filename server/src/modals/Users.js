const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, },
    userRole: { type: String, require: true, },


}, { collection: 'users' })
module.exports = mongoose.model('Users', usersSchema)