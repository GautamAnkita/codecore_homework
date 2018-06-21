const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', (request, response) => {
	// Get the parameters/values that were submitted by the form
  const userName = request.body.userName;
  if(userName){
    response.cookie('userName', userName);
    response.redirect('/quiz');
  } else {
    response.redirect('/');
  }
});

module.exports = router;
