var express = require('express');
var router = express.Router();
const Subject = require('../models/Subjects');
const ObjectId = require('mongoose').Types.ObjectId;

/* GET subjects listing. */
router.get('/', (req, res, next) => {
  Subject.find()
    .exec((err, subjects) => res.json(subjects));
});

/* GET a subject by subject ID */
router.get('/:id', (req, res, next) => {
  console.log(req.params.id)
  // Subject.findOne({_id: ObjectId(req.param.id)}, (err, subject) => res.json(subject))
  Subject.findById(req.params.id)
    .exec((err, subject) => res.json(subject));
})

/* POST a new subject*/

/* PUT a subject by ID */

/* DELETE a subject by ID */

module.exports = router;