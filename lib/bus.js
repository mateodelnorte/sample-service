var bus = require('servicebus').bus();

bus.use(bus.package());
bus.use(bus.correlate());
bus.use(bus.log());
bus.use(bus.retry());

module.exports = bus;