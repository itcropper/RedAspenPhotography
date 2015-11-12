var pricingModel = require('../models/pricing-model.js');

exports.getAll = function(cb){
    pricingModel
        .find()
        .exec(function(err, res){
            if(!err){ 
                var res = res.map(function(e){
                    e.title = e.title.toUpperCase();
                    e.target = "./pricing/" + e.target;
                    return e;
                });
                cb(res); 
            }else{
                console.log("ERROR", err);
            }
        });
};

exports.getOne = function(key, cb){
    key = key.toUpperCase();
    pricingModel
        .findOne({heading: key}, {_id: 0 })
        .exec(function(err, res){
            if(!err){ 
                cb(res); 
            }else{
                console.log("ERROR", err);
            }
        });
};

/*
    target: String,
    imgsrc: String,
    title: String,
    summary: [String],
    header: String,
    drillDownImages: [String],
    details: [String],
    subDetails: [String]
*/

/*
{
        "heading": "PORTRAITS",
        "imgsrc": "/images/albums/families/27.jpg",
        "title": "portraits",
        "target": "portraits",
        "summary": "",
        "drillDownImages": [
            "/images/albums/families/27.jpg",
            "/images/albums/portraits/13.jpg",
            "/images/albums/portraits/29.jpg"
        ],
        "header": "250 FULL SHOOT",
        "details": [
            "2 Hours",
            "Up to two locations",
            "Access to library of professionally edited images for imediate downloading and sharing.",
            "Two hours is recomended to allow for enough time to capture these important moments. ",
            "With up to two locations and unlimited wardrobe changes, it allows for a relaxed and fun shoot.",
            "If things run a litle longer than two hours then so be it; we must be having a good time."
        ],
        "subDetails": []
}
*/