const Court = require('../models/court');
const User = require('../models/user');

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
    res.render('courts/new', {title: 'add court'});
}

  function show(req, res) {
    Court.findById(req.params.id, function(err, court){
        res.render('courts/show', {title: 'Court Details', court})
    });
  }
  function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    let court = new Court(req.body)
    court.save(function(err){
        console.log(err);
        if (err) return res.redirect('/courts/new')
        res.redirect('/courts')
    }) 
  }