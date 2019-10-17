var express = require('express');
var router = express.Router();
const User = require('../models/UsersQuizz');

/* GET listing usersQuizz*/
router.get('/', function(req, res, next) {
  User.find().limit(10).exec((err, users) => res.json(users));
});

/* GET 1 user  */
router.get('/:id', (req, res) => {
  User.findById(req.params.id).exec((err,sta) => res.json(sta));
});

/* post 1 user */
router.post('/', (req, res) =>{
  const  user = new User(req.body);
  user.save((err,user) => res.json(user))

});






module.exports = router;

