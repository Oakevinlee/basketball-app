var express = require('express');
var router = express.Router();
var courtsCtrl = require('../controllers/courts')

router.get('/', courtsCtrl.index)



module.exports = router;