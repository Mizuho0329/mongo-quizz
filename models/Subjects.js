const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: String,
  questions: [{
    id: { type: Schema.Types.ObjectId },
    question: String,
    user_id: { type: Schema.Types.ObjectId },
    answers: [{
      answer: String,
      is_correct: Boolean
    }]
  }]
})

module.exports = mongoose.model('Subject', subjectSchema);