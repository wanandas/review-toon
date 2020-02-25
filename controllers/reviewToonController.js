const ReviewToon = require("../models/reviewToon.model");

const getAllReview = async (req, res) => {
  const reviewToon = await ReviewToon.find();
  try {
    res.status(200).json({
      status: "success",
      results: reviewToon.length,
      reviewToon
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      error
    });
  }
};

const createReview = async (req, res) => {
  const newReviewtoon = await ReviewToon.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      review: { newReviewtoon }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

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
    res.status(201).json({
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
