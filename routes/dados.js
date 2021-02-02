var express = require('express');
var router = express.Router();
var cors = require('cors')
const controller = require('../controller/dadosController')


router.get('/', cors(), controller.getAll)
router.post('/post', cors(), controller.create)
router.delete('/delete/:id', cors(), controller.delete)

module.exports = router;
