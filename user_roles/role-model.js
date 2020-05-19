const mongoose = require('mongoose')

const user_role = mongoose.model('user_role', require('./role-schema'));

module.exports = user_role;