var app     = require('koa')(),
    router  = require('koa-router')(),
    koaBody = require('koa-body')();
    nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'elderlybishop@gmail.com', // some dummy gmail i set up
        pass: 'miniipod'
    }
});

// generic email, just passes the request body straight into
// sendmail function
router.post('/email', koaBody,
  function *(next) {
    var mailOptions = this.request.body;
    transporter.sendMail(mailOptions, function(error, info){
      if (error) console.log(error);
      else console.log('Message sent: ' + info.response);
    });
    console.log("BYE");
    this.body = JSON.stringify(this.request.body) + "\n";
  }
);

// very similar to one above, just has default settings 
// that can be overridden by request body, very simple
// right now -- just default subject line
router.post('/email/shipment/pickup', koaBody,
  function *(next) {
    var settings = { subject: "Shipment Picked Up" };
    var mailOptions = this.request.body;
    for (var option in mailOptions) settings[option] = mailOptions[option];
    transporter.sendMail(settings, function(error, info){
      if (error) console.log(error);
      else console.log('Message sent: ' + info.response);
    });
    this.body = JSON.stringify(settings) + "\n";
  }
);

// next 2 are similar to above
router.post('/email/shipment/shipped', koaBody,
  function *(next) {
    var settings = { subject: "Shipment Shipped" };
    var mailOptions = this.request.body;
    for (var option in mailOptions) settings[option] = mailOptions[option];
    transporter.sendMail(settings, function(error, info){
      if (error) console.log(error);
      else console.log('Message sent: ' + info.response);
    });
    this.body = JSON.stringify(settings) + "\n";
  }
);

router.post('/email/shipment/received', koaBody,
  function *(next) {
    var settings = { subject: "Shipment Received" };
    var mailOptions = this.request.body;
    for (var option in mailOptions) settings[option] = mailOptions[option];
    transporter.sendMail(settings, function(error, info){
      if (error) console.log(error);
      else console.log('Message sent: ' + info.response);
    });
    this.body = JSON.stringify(settings) + "\n";
  }
);

app.use(router.routes());

app.listen(3131);