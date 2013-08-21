var debug = require('debug')('taxservice:stateandmunitaxes');
var bus = require('servicebus').bus();

module.exports = function (msg) {
  var order = msg.data;
  debug('calulcating local taxes!');
  bus.publish('taxes:calculated', {
    orderId: order.id,
    order: order,
    tax: Math.random().toFixed(2)
  });
};