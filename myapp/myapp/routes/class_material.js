var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  res.render('class_performance', { title: 'class_performance' });



});


module.exports = router;
