const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    //Something
});

const test = mongoose.model('test',testSchema);

module.exports = test;