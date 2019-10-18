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
  Subject.findById(req.params.id)
    .exec((err, subject) => res.json(subject));
})

/* POST a new subject*/
router.post('/', (req, res, next) => {
  let subject = new Subject(req.body);
  subject.save((err, subject) => res.json(subject));
})

/* PUT a subject by ID */
router.put('/:id', (req, res, next) => {
  Subject.updateOne(
    { _id : ObjectId(req.params.id) },
    req.body,
    (err, subject) => res.json(subject)
  );
})

/* DELETE a subject by ID */
router.delete('/:id', (req, res, next) => {
  Subject.deleteOne({ _id : ObjectId(req.params.id) })
    .exec((err, subject) => res.json(subject));
})

module.exports = router;