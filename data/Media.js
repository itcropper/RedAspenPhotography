var fs = require('fs');

exports.showcase_images = function(callback){
    fs.readdir('./content/images/showcase', function(err, files){
        var files = files.map(function(m){
            return  {src: '/images/showcase/' + m};
        });
        callback({images: files });
    });
}

exports.albumCovers = function(callback){
    fs.readdir('./content/images/albums', function(err, files){
        var files = files.map(function(m){
            return  {src: '/images/albums/' + m};
        });
        callback({images: files });
    });
};