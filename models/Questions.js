const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
  user_id: { type: Schema.Types.ObjectId, ref:'User'  },
  subject_id: { type: Schema.Types.ObjectId, ref:'Subject' },
  answers: [{
    answer: String,
    is_correct: Boolean
  }],
  created_at: {type: Date, default: Date.now}

})

questionSchema.pre('updateOne', function (next) {
  this.created_at = Date.now;
  next();
});

module.exports = mongoose.model('Question', questionSchema);
