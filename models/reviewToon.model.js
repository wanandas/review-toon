const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewToonSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Review must have a name of anime"],
      unique: true,
      trim: true
    },
    reviewer: {
      type: String,
      required: [true, "Review must have a name of reviewer"]
    },
    genres: {
      type: Array,
      required: [true, "Review must have a genres of anime"]
    },
    photo: { type: String, required: true },
    score: {
      type: Number,
      required: true,
      min: [1.0, "Score must be above 1.0"],
      max: [10.0, "Score must be below"]
    },
    comment: {
      type: String,
      required: [true, "Review must have a comment"],
      trim: true
    },
    reason: [
      {
        reasonname: {
          type: String,
          required: [true, "Review must have reason"],
          trim: true
        },
        reasonscore: {
          type: Number,
          required: [true, "Review must have score of reason"]
        }
      }
    ]
  },
  { timestamps: true }
);

const ReviewToon = mongoose.model("Review", reviewToonSchema);

module.exports = ReviewToon;
