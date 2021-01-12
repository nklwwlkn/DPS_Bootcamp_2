const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  { 
    name: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
    },
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;