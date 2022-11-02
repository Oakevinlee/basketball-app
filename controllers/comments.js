const Court = require('../models/court');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteComment

};

function create(req, res){
    Court.findById(req.params.id, function(err, court){
        req.body.user = req.user._id; 
        req.body.userName = req.user.name; 
        req.body.userAvatar = req.user.avatar; 
        court.comments.push(req.body);
        court.save(function(err) {
            res.redirect(`/courts/${court._id}`)
        })

        
    })
    
}

// function deleteComment(req, res) {
//       Court.findOneAndDelete(
//         {"comments._id": req.params.id, "comments.user": req.user}, function(err, court) {
//             court.comments.remove(req.params.id);
//             court.save(function(err){
//                 res.redirect(`/courts/${court._id}`);
//             })
//         }
//       )
// };

function deleteComment(req, res, next) {
    Court.findOne({
      'comments._id': req.params.id,
      'comments.user': req.user._id
    }).then(function(court) {
      if (!court) return res.redirect('/courts');
      court.comments.remove(req.params.id);
      court.save().then(function() {
        res.redirect(`/courts/${court._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }