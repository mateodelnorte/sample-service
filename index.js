var bus = require('servicebus').bus();
var debug = require('debug')('sampleservice');
var orderPlaced = require('./lib/handlers/orderPlaced');

bus.listen('order:placed', orderPlaced);

debug('sample service started');
