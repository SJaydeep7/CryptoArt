const mongoose = require('mongoose')

const PasswordResetSchema = new mongoose.Schema ({
    email: String,
    password: String,
    resetToken: String,
    resetTokenExpiry: Date,
  });

const PasswordReset = mongoose.model('uploads', ImageDataSchema);
module.exports = PasswordReset;