const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true

  }
});

module.exports = mongoose.model('Register', schema);