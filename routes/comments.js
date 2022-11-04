var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');
var loggedIn = require('../config/loggedIn');


router.post('/courts/:id/comments', loggedIn, commentsCtrl.create);
router.delete('/comments/:id', loggedIn, commentsCtrl.delete);
router.get('/comments/:id/edit', loggedIn, commentsCtrl.edit);
router.put('/courts/:courtId/comments/:id', loggedIn, commentsCtrl.update);


module.exports = router;