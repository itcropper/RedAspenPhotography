var fs = require('fs');

exports.showcase_images = function(callback){
    
    var list = [];
    
    for(var i = 1; i < 13; i++){
        list.push({
            src: "https://s3-us-west-2.amazonaws.com/red-aspen-photography/showcase/showcase_" + i + ".jpg"
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