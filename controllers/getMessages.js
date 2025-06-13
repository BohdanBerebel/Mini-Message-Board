const db = require("../db/poolUsing");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Messageboard",
    messages,
  });
}

async function addMessage(req, res) {
  const { name, messageText } = req.body;
  const date = new Date();
  await db.addMessage({
    messageText,
    name,
    date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  });
  res.redirect("/");
}

module.exports = { getAllMessages, addMessage };
