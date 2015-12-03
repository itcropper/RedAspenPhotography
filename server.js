var express =       require('express'),
    app =           express(),
    bodyParser =    require('body-parser'),
    mongoose =      require('mongoose'),
    contact =       require('./server/routeActions/contact'),
    path    =       require('path'),
    exphbs = require('express-handlebars'),
    data = require('./data/Media'),
    albums = require('./controllers/albums'),
    gallery = require('./controllers/gallery'),
    pricings = require('./controllers/pricings');
    

var jsonParser = bodyParser.json();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/styles', express.static(__dirname + '/content/styles'));
app.use('/scripts', express.static(__dirname + '/content/scripts'));
app.use('/images', express.static(__dirname + '/content/images'));
app.use('/fonts', express.static(__dirname + '/content/fonts'));


var PORT = process.env.PORT || 3000;
var MONGOOSE_PORT =
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL  || 
  'mongodb://localhost:27017;'; 

mongoose.connect(MONGOOSE_PORT, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + MONGOOSE_PORT + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + MONGOOSE_PORT);
  }
});
 
app.get('/', function(req, res){
    data.showcase_images(function(result){
        res.render('home', result);
    });
});

app.get('/about', function(req, res){
        res.render('about');
});

app.get('/contact', function(req, res){
        res.render('contact');
});

app.get('/pricing', function(req, res){
    pricings.getAll(function(result){
        res.render('pricing', {pricings: result});
    });
});

app.get('/pricing/:genre', function(req, res){
    pricings.getOne(req.params.genre, function(result){
        res.render('pricing-package', result);
    });
});

//app.get('/pricingJson/:genre', function(req, res){
//    pricings.getOne(req.params.genre, function(result){
//        res.json(result);
//    });
//});

app.get('/gallery', function(req, res){
    
    albums.getAll(function(result){
        var images = result.map(function(e){ 
            e.imgsrc = "/images" + e.imgsrc;
            return e;
        });
        res.render('works', {images: images});
    });
});

app.get('/gallery/:album', function(req, res){
    gallery.get(req.params.album, function(result){
        res.render('album', result);
    });
});

app.post('/contact', jsonParser, contact.email);


app.listen(PORT, function() {
    console.log('Listening on Port ' + PORT);
});