var nodemailer = require('nodemailer'),
    bodyParser =    require('body-parser'),
    sendmail = require('sendmail')();

var transporter = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    debug: true,
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});


exports.email = function (req, res) {
    // create reusable transporter object using SMTP transport


    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.name, // sender address
        to: process.env.email, // list of receivers
        subject: 'RED ASPEN PHOTOGRAPHY', // Subject line
        text: 'You have a message from: \n' + req.body.name + '\nat: \n ' + req.body.email + '\n\n' + req.body.message, // plaintext body
        html: '' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.end('Sorry, something went wrong and can\'t get your message. Try copying my email address into your email client.');
        }else{
            res.end('Thank you. I\'ll get back to you as quick as I can!');
        }
});
}

