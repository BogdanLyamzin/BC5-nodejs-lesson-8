const {Schema} = require("mongoose");

const userSchema = Schema({
    email: {
        type: String,
        required: [true, "Email must be exist"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password must be exist"],
        minlength: 6
    }
});

module.exports = userSchema;