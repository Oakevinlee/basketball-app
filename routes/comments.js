var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');
var ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/courts/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);
router.get('/comments/:id/edit', ensureLoggedIn, commentsCtrl.edit);
router.put('/courts/:courtId/comments/:id', ensureLoggedIn, commentsCtrl.update);


module.exports = router;