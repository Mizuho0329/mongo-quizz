var express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Question = require('../models/Questions');
const Subject = require('../models/Subjects')


/* liste des questions avec titre du sujet */
router.get('/', function (req, res, next) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) ||10;
  const skip = (page - 1) * limit;

  Question.countDocuments({}, (err, count) => {
    Question
          .find(req.query.filters)
          .skip(skip)
          .limit(parseInt(limit) || 10)
          .sort({name: 1})
          .exec((err, questions) => res.json({
              count: count,
              page: page,
              limit: limit,
              results: questions
          }));
  });
});

/* créer une nouvelle question liée à un sujet  */
router.post('/', (req, res) =>{
  const  question = new Question(req.body);
  question.save((err,question) => res.json(question))
});

/* récupérer une question avec titre du sujet */
router.get('/:id', (req, res) => {
  Question.findById(req.params.id).exec((err,question) => res.json(question));
});

/* mettre à jour une question */
router.put('/:id', (req, res) => {
  Question.updateOne({ _id: ObjectId(req.params.id) }, req.body, (err, question) => res.json(question))
});

/* supprimer une question*/
router.delete('/:id', (req, res) => {
  Question.findByIdAndDelete(req.params.id, (err, question) => res.json(question))
});

module.exports = router;