const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Incidences = new Schema({
  title: String,
  description: String,
  date: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Incidence', Incidences);
