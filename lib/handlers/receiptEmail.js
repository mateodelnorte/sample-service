var bus = require('../bus');
var debug = require('debug')('emailservice:receipt');

module.exports = function (msg) {
  // pretend we persisted stuff and did a bunch of work. ;)
  var total = 0;
  msg.data.order.items.forEach(function (item) {
    total += Number(item.price);
  });
  total += Number(msg.data.tax);

  debug('sending receipt!');

  bus.publish('email:sent:receipt', {
    orderId: msg.data.orderId,
    text: 'Thanks for buying $' + total + ' bucks worth of stuff!!!'
  });
};
