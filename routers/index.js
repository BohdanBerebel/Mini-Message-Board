const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.post("/new", (req, res) => {
  const { name, messageText } = req.body;
  messages.push({ text: messageText, user: name, added: new Date() });
  res.redirect("/");
});
indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = { indexRouter, messages };
