const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    created_at: {type: Date, default: Date.now}
});


userSchema.pre('updateOne', function (next) {
    this.created_at = Date.now;
    next();
});

module.exports = mongoose.model('User', userSchema);