var express = require('express');
var router = express.Router();
var courtsCtrl = require('../controllers/courts');
var ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, courtsCtrl.create);
router.get('/', courtsCtrl.index);
router.get('/new', courtsCtrl.new);
router.get('/:id', courtsCtrl.show);
router.delete('/:id', ensureLoggedIn, courtsCtrl.delete);

module.exports = router;
