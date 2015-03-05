var nodemailer = require('nodemailer'),
    bodyParser =    require('body-parser'),
    sendmail = require('sendmail')();



exports.email = function (req, res) {
    

sendmail({
    from: req.body.email,
    to: 'itcropper@gmail.com',
    subject: 'Message on RED ASPEN, From: ' + req.body.name,
    content: req.body.message,
  }, function(err, reply) {
    if(err){
        res.end('Sorry, Cannot send that email right now. Please Try again later');   
    }else{
        res.end("Email Sent! Thank you, I'll get back to you shortly.");
    }
});
}

