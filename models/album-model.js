var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var album = new Schema({
    target: String,
    imgsrc: String,
    title: String,
    description: String
});

module.exports = mongoose.model('albums', album);