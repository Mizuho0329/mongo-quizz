const express = require('express');
const router = express.Router();
const User = require('../models/UsersQuizz');
const ObjectId = require('mongoose').Types.ObjectId;

// /* Lister les users de mongoQuizz*/

router.get('/', function (req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) ||10;
    const skip = (page - 1) * limit;

    User.countDocuments({}, (err, count) => {
        User
            .find(req.query.filters)
            .skip(skip)
            .limit(parseInt(limit) || 10)
            .sort({name: 1})
            .exec((err, users) => res.json({
                count: count,
                page: page,
                limit: limit,
                results: users
            }));
    });
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

