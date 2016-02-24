var fs = require('fs');

exports.showcase_images = function(callback){
    
    var list = [];
    
    for(var i = 1; i < 13; i++){
        list.push({
            src:"http://res.cloudinary.com/redaspenphotography/image/upload/{0}/v1456257916/showcase/showcase_"+ i +".jpg"
        });
    }
    callback({images: list});
}

exports.albumCovers = function(callback){
    fs.readdir('./content/images/albums', function(err, files){
        var files = files.map(function(m){
            return  {src: '/images/albums/' + m};
        });
        callback({images: files });
    });
};