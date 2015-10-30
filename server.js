var app     = require('koa')(),
    router  = require('koa-router')(),
    koaBody = require('koa-body')();
    nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'elderlybishop@gmail.com',
        pass: 'miniipod'
    }
});


router.post('/email', koaBody,
  function *(next) {
    var subject = this.request.body.subject;
    var attachments = this.request.body.attachments;

    console.log(this.request.body);

    var mailOptions = this.request.body;

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });


    this.body = JSON.stringify(this.request.body) + "\n";
  }
);

app.use(router.routes());

app.listen(3131);