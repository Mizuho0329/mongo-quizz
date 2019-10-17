const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: String,
  questions: [{
    id: { type: Schema.Types.ObjectId },
    question: String,
    answers: [{
      answer: String,
      is_correct: Boolean
    }],
    user_id: { type: Schema.Types.ObjectId }
  }]
})

module.exports = mongoose.model('Subject', subjectSchema);