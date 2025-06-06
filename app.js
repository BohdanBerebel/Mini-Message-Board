const express = require("express");
const app = express();
const path = require("path");
const { indexRouter } = require("./routers/index");
const separateMessage = require("./routers/separateMessage");
require("dotenv").config();
// process.env
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

indexRouter.get("/new", (req, res) => {
  res.render("form");
});
app.use("/message", separateMessage);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
