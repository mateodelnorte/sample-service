var bus = require('./lib/bus');
var debug = require('debug')('taxservice');
var stateAndMunicipalTaxes = require('./lib/handlers/stateAndMunicipalTaxes');

bus.subscribe('order:placed', stateAndMunicipalTaxes);

debug('tax service started');
