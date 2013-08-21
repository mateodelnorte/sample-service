var bus = require('servicebus').bus();
var debug = require('debug')('taxservice');
var stateAndMunicipalTaxes = require('./lib/handlers/stateAndMunicipalTaxes');

bus.subscribe('order:placed', stateAndMunicipalTaxes);

debug('tax service started');
