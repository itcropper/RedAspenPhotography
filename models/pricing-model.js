var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pricing = new Schema({
    target: String,
    imgsrc: String,
    title: String,
    summary: String,
    heading: String,
    drillDownImages: [String],
    selections : [
        {
            details: [String],
            name: String, 
            price: String,
            length: String
        }
    ],
    
    subDetails: [String]
});

module.exports = mongoose.model('prices', pricing);