var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('normal', { title: 'Example', text: 'This is example of the custom route' });
});

module.exports = router;
