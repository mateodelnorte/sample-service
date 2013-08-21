var bus = require('servicebus').bus();
var debug = require('debug')('emailservice');
var confirmationEmail = require('./lib/handlers/confirmationEmail');
var receiptEmail = require('./lib/handlers/receiptEmail');

bus.subscribe('order:placed', confirmationEmail);
bus.subscribe('taxes:calculated', receiptEmail);

debug('email service started');
