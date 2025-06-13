const { Router } = require("express");

const indexRouter = Router();

const db = require("../db/poolUsing");

const controller = require("../controllers/getMessages");

// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date(),
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date(),
//   },
// ];

indexRouter.post("/new", controller.addMessage);
indexRouter.get("/", controller.getAllMessages);

module.exports = { indexRouter };
