const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username : { type: String, required: true, unique: true},
    password : { type: String, required: true},
    email : { type: String, required: true},
    avatar : { type: String , default: 'default-avatar.svg'}
})

module.exports = mongoose.model('User', UserSchema);