var express =       require('express'),
    app =           express(),
    bodyParser =    require('body-parser'),
    mongoose =      require('mongoose'),
//    passport = require('./server/passport'),
//    passportLocal = require('passport-local'),
//    cookieParser = require('cookie-parser'),
    expressSession = require('express-session')
    path    =       require('path');;

var port = 3000;

app.engine('html', require('ejs').renderFile);

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use('/js', express.static(__dirname + '/public/js'));
app.use(express.static(path.join(__dirname, 'public')));


//partials
app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('views/partials/' + name);
});
    
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});



app.listen(port, function() {
    console.log('Listening on Port ' + port);
});