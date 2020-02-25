const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const reviewToonRoute = require("./routes/reviewToonRoute");

require("dotenv").config({ path: "./config.env" });

const app = express();
app.use(morgan("dev"));
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB connection successful !");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/api/review", reviewToonRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
