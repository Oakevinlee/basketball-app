var express = require('express');
var router = express.Router();
var courtsCtrl = require('../controllers/courts')

router.get('/', courtsCtrl.index)
router.get('/new', courtsCtrl.new)
router.get('/:id', courtsCtrl.show)
router.post('/', courtsCtrl.create)

module.exports = router;
