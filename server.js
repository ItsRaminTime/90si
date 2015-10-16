var app     = require('koa')(),
    router  = require('koa-router')(),
    koaBody = require('koa-body')();
    nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'elderlybishop@gmail.com',
        pass: 'xxx'
    }
});


router.post('/email', koaBody,
  function *(next) {
    var subject = this.request.body.subject;
    var attachments = this.request.body.attachments;

    var mailOptions = {
      from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
      to: 'cindy.yu.cy@gmail.com', // list of receivers
      subject: subject, // Subject line
      text: 'Hello world ✔', // plaintext body
      attachments: attachments
    };

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