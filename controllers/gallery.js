var galleryModel = require('../models/gallery-model.js');

exports.get = function(albumKey, cb){
    console.log(albumKey);
    galleryModel
        .findOne({key: albumKey})
        .exec(function(err, res){
            if(!err){ 
                cb(res); 
            }else{
                console.log("ERROR", err);
            }
        });
};
    