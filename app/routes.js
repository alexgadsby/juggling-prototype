var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/what-juggle', function(req, res){

var jugglingBalls = req.session.data['juggling-balls']

 if (jugglingBalls == "3 or more"){
  res.redirect('/what-juggle')
} else {
  res.redirect('/ineligible')
}

})
router.post('/juggling-trick', function(req, res){

  var whatJuggle = req.session.data['what-juggle']

  if (whatJuggle == "No, I only juggle balls"){
    res.redirect('/juggling-trick')
  } else {
    res.redirect('/ineligible')
  }

})




module.exports = router
