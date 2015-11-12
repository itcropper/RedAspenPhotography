var albumModel = require('../models/album-model.js');

exports.getAll = function(cb){
    
    albumModel
        .find()
        .exec(function(err, res){
            if(!err){ 
                cb(res); 
            }else{
                console.log("ERROR", err);
            }
        }
    );
    
}