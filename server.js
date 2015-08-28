var express =       require('express'),
    app =           express(),
    bodyParser =    require('body-parser'),
//    mongoose =      require('mongoose'),
//    passport = require('./server/passport'),
//    passportLocal = require('passport-local'),
//    cookieParser = require('cookie-parser'),
    //expressSession = require('express-session')
    contact = require('./server/routeActions/contact'),
    path    =       require('path');

var jsonParser = bodyParser.json()

app.set('view engine', 'ejs');

var port = Number(process.env.PORT || 3000);

//mongoose.connect('mongodb://localhost:27017/');

app.use('/js', express.static(__dirname + '/public/js'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


//partials
app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('views/partials/' + name);
});
    
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.post('/contact', jsonParser, contact.email);


app.listen(port, function() {
    console.log('Listening on Port ' + port);
});