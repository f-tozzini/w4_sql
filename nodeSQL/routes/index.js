var express = require('express');
var router = express.Router();
var config = require('../config');

//do some checking here to see  the user profile
// ternary statement => MD ternary

var toRender = (config.kidsmode) ? 'main_kids' : 'home';

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render(toRender, {
//     title: 'Mini Cooper',
//     message: 'Hello!',
//     mainpage: true,
//     kidsmode : config.kidsmode
//   });
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Mini Cooper',
    message: 'Hello!',
    mainpage: true,
    cms: false,
    kidsmode : config.kidsmode
  });
});

router.get('/cms', (req, res) => {
  console.log('hit the cms route');
  res.render('cmsForm', {
    cms : true,
    mainpage: false
  });
});

module.exports = router;
