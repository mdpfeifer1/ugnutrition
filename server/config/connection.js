const mongoose = require('mongoose');
require('dotenv').config();

// console.log('MONGODB_URI:', process.env.MONGODB_URI);
// console.log('CONN_STRING:', process.env.CONN_STRING);

mongoose.connect(process.env.MONGODB_URI || process.env.CONN_STRING);

module.exports = mongoose.connection;
