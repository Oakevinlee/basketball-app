const Court = require('../models/court');
const User = require('../models/user');

module.exports = {
  new: newCourt,
  create,
  index,
  show,
  delete: deleteCourt,
  edit,
  update
}

function newCourt(req, res) {
    res.render('courts/new', {title: 'add court'});
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
function index(req, res) {
    Court.find({}, function(err, courts) {
      res.render('courts/index', { title: 'list of courts', courts });
    });
  }


  function show(req, res) {
    Court.findById(req.params.id, function(err, court){
        res.render('courts/show', {title: 'Court Details', court})
    });
  }
  
function deleteCourt(req, res) {
    Court.findOneAndDelete(
      {_id: req.params.id, user:req.user}, function(err) {
        res.redirect('/courts');
      }
    )
  
  }

  function edit(req, res) {
    Court.findOne({_id: req.params.id}, function(err, court) {
      if (err || !court) return res.redirect('/courts');
      res.render('courts/edit', {court});
    });
  }

  function update(req, res) {
    Court.findOneAndUpdate(
      {_id: req.params.id},
      req.body, 
      {new: true},
      function(err, court) {
        if (err || !court) return res.redirect('/cours');
        res.redirect(`/courts/${court._id}`);
      }
    );
  }