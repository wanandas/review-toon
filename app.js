const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const reviewToonRoute = require("./routes/reviewToonRoute");
const AppError = require("./utils/appError");

const app = express();
app.use(morgan("dev"));
// GLOBAL MIDDLEWARES

app.use(cors());
app.use(express.json());

// ROUTERS
app.use("/api/review", reviewToonRoute);

app.all("*", (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.status = 'fail';
  // err.status = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

module.exports = app;
