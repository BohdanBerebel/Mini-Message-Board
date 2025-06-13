const { Router } = require("express");
const separateMessage = Router();
// const { messages } = require("./index");
const messages = require("../db/poolUsing");

separateMessage.get("/:id", async (req, res) => {
  const { id } = req.params;
  const note = await messages.getOneMessage(+id);
  // const details = messages[Number(id)];

  res.render("oneMessage", { item: note[0] });
});

separateMessage.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await messages.deleteMessage(+id);
  res.redirect("/");
});

module.exports = separateMessage;
