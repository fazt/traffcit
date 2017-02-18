import disk from 'diskusage';
var Incidences = require('../models/incidences');
var User = require('../models/users');

export default {
  diskspace,
  uptime,
  incidences,
  lastuser,
  incidencesData,
  users,
  currentUser
};

function currentUser(req, res) {
  res.json(req.user);
}

function diskspace(req, res) {
  disk.check('/', function(err, info) {
    var giga = 1024 * 1024 * 1024 ;

    var free =((info.free)/giga).toFixed(2);
    var available = (info.available/giga).toFixed(2);
    var total = (info.total/giga).toFixed(2);

    res.json({
      free,
      available,
      total
    });
  });
}


function uptime(req, res) {
  var uptime = process.uptime();
  res.json({uptime});
}

function incidences(req, res) {
  Incidences.count({}).sort({date: -1}).exec(function (err, count) {
    res.json({count:count});
  });
}

function incidencesData(req, res) {
  Incidences.find({}, function (err, data) {
    res.json(data);
  });
}

function lastuser(req, res) {
  User.findOne({}).sort({created: -1}).exec(function (err, doc) {
    res.json(doc)
  });
}

function users(req, res) {
  User.find({}, function (err,data) {
    res.json(data);
  });
}
