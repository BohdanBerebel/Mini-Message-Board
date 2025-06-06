const { Router } = require("express");
const separateMessage = Router();
const { messages } = require("./index");

separateMessage.get("/:id", (req, res) => {
  const { id } = req.params;
  const details = messages[Number(id)];

  res.render("oneMessage", { item: details });
});

module.exports = separateMessage;
