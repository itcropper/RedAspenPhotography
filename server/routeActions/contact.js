var nodemailer = require('nodemailer'),
    bodyParser =    require('body-parser'),
    sendmail = require('sendmail')();

var transporter = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});


exports.email = function (req, res) {
    var mailOptions = {
        from: req.body.name, // sender address
        to: process.env.email, // list of receivers
        subject: 'RED ASPEN PHOTOGRAPHY', // Subject line
        text: 'You have a message from: \n' + req.body.name + '\nat: \n ' + req.body.email + '\n\n' + req.body.message, // plaintext body
        html: '' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        console.log('error', error, 'info', info);
        if(error){
            res.end('Sorry, something went wrong and can\'t get your message. Try copying my email address into your email client.');
        }else{
            res.end('Thank you. I\'ll get back to you as quick as I can!');
        }
});
}

