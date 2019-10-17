var express = require('express');
var router = express.Router();
const User = require('../models/UsersQuizz');
const ObjectId = require('mongoose').Types.ObjectId;

/* Lister les users de mongoQuizz*/
router.get('/', function(req, res, next) {
  User.find().limit(10).exec((err, users) => res.json(users));
});

/* Selectionner un user  */
router.get('/:id', (req, res) => {
  User.findById(req.params.id).exec((err,sta) => res.json(sta));
});

/* Ajouter 1 user */
router.post('/', (req, res) =>{
  const  user = new User(req.body);
  user.save((err,user) => res.json(user))
});

/* mettre à jour un user*/
router.put('/:id', (req, res) => {
  User.updateOne({ _id: ObjectId(req.params.id) }, req.body, (err, user) => res.json(user))
});

/* Supprimer un user*/
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => res.json(user))
});


module.exports = router;

