var bus = require('../bus'),
    debug = require('debug')('emailservice:confirmationEmail'),
    uniqueId = require('node-uuid').v4,
    util = require('util');

function OrderPlacedEmailV1 (order) {
  this.template = 'Hi! You bought <<NUMBER>> items! Thanks!!! We\'ll send you a recept soon. :D ';
  this.order = order;
}

OrderPlacedEmailV1.prototype.render = function () {
  return this.template.replace('<<NUMBER>>', this.order.items.length);
};

function EmailRepository () {
  this.emails = {};
}

EmailRepository.prototype.saveEmail = function (email, callback) {
  this.emails[email.id] = email;
  debug('saving email ' + util.inspect(email, null, 10));
  callback(null, email);
};

var emailRepo = new EmailRepository();

function sendToEmailGateway (email, callback) {
  // lets pretend we're sending to sendgrid or mailgun here!!!
  var text = email.render();

  debug('sending mail:' + text);

  callback(null, email, text);
}

module.exports = function (msg) {
  var order = msg.data;
  var email = new OrderPlacedEmailV1(order);

  emailRepo.saveEmail(email, function (err, email) {
    if (err) throw err;

    sendToEmailGateway(email, function (err, email, text) {
      if (err) throw err;

      bus.publish('email:sent:confirmation', {
        orderId: order.id,
        email: email,
        text: text
      });
    });
  });
};
