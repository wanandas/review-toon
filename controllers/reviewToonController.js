const ReviewToon = require("../models/reviewToon.model");
const APIFeatures = require("../utils/apiFeatures");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const getAllReview = catchAsync(async (req, res) => {
  const feature = new APIFeatures(ReviewToon.find(), req.query)
    .filter()
    .sort()
    .limitfields()
    .paginate();

  const reviewToon = await feature.query;

  res.status(200).json({
    status: "success",
    results: reviewToon.length,
    data: { reviewToon }
  });
});

const createReview = catchAsync(async (req, res) => {
  const newReviewtoon = await ReviewToon.create(req.body);

  res.status(201).json({
    status: "success",
    review: { newReviewtoon }
  });
});

const getReview = async (req, res) => {
  const review = await ReviewToon.findById(req.params.id);

  try {
    res.status(200).json({
      status: "success",
      review
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

const deleteReview = async (req, res) => {
  await ReviewToon.findByIdAndDelete(req.params.id);
  try {
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

const editReview = async (req, res) => {
  const review = await ReviewToon.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  try {
    res.status(200).json({
      status: "success",
      review
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

module.exports = {
  getAllReview,
  createReview,
  getReview,
  deleteReview,
  editReview
};
