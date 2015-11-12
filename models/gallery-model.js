var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var gallery = new Schema({
    title: String,
    key: String,
    images: [{
        src: String
    }]
});

module.exports = mongoose.model('galleries', gallery);