var express = require('express');
var router = express.Router();
var courtsCtrl = require('../controllers/courts');
var loggedIn = require('../config/loggedIn');


router.post('/', loggedIn, courtsCtrl.create);
router.get('/', courtsCtrl.index);
router.get('/new', courtsCtrl.new);
router.get('/:id', courtsCtrl.show);
router.delete('/:id', loggedIn, courtsCtrl.delete);
router.get('/:id/edit', courtsCtrl.edit);
router.put('/:id', courtsCtrl.update);




module.exports = router;
