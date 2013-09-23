var debug = require('debug')('taxservice:stateandmunitaxes');
var bus = require('../bus');

module.exports = function (msg) {
  var order = msg.data;
  debug('calulcating local taxes!');
  setTimeout(function () {
    bus.publish('taxes:calculated', {
      orderId: order.id,
      order: order,
      tax: Math.random().toFixed(2)
    });
  }, 10000)
};
