const Court = require('../models/court');

module.exports = {
    index,
    new: newCourt,
    show,
    create
    
}

function index(req, res) {
    Court.find({}, function(err, courts) {
      res.render('courts/index', { title: 'list of courts', courts });
    });
  }

function newCourt(req, res) {
    res.render('courts/new', {title: 'add court'})
}

  function show(req, res) {
    console.log('show')
    res.render('courts/show')
  }
  function create(req, res) {
    console.log('create')
  }