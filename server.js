const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });

const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://BusyOnFriday:iL4lxGNLrlpZNbQQ@cluster0-ckxmp.mongodb.net/reviewtoon?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  )
  .then(() => {
    console.log("DB connection successful !");
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}...`);
});

process.on("unhandledRejection", err => {
  console.log("UNHANDLER REJECTION! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
