var albumModel = require('../models/album-model.js');

exports.getAll = function(cb){
    
    albumModel
        .find()
        .sort({sort: 1})
        .exec(function(err, res){
            if(!err){ 
                cb(res); 
            }else{
                console.log("ERROR", err);
            }
        }
    );
}