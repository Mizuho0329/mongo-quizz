var express = require('express');
var router = express.Router();
const Subject = require('../models/Subjects');
const ObjectId = require('mongoose').Types.ObjectId;

/* GET subjects listing. */
/* ex: .../subjects?limit=5&page=2&filters[name]=Google */
router.get('/', (req, res, next) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const skip = limit * (page - 1);

  Subject.countDocuments({}, (err, count) => {
    Subject
      .find(req.query.filters)
      .skip(skip)
      .limit(limit)
      .sort({name: 1})
      .exec((err, subjects) => res.json({
        count: count,
        limit: limit,
        page: page,
        results: subjects
      }));
  });
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