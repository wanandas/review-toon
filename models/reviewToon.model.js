const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewToonSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  reviewer: { type: String, required: true },
  genres: { type: Array, required: true },
  photo: { type: String, required: true },
  score: { type: Number, required: true },
  comment: { type: String, required: true, trim: true },
  reason: [
    {
      reasonname: { type: String, required: true, trim: true },
      reasonscore: { type: Number, required: true }
    }
  ]
});

const ReviewToon = mongoose.model("Review", reviewToonSchema);

module.exports = ReviewToon;
