const pool = require("./createPool");

async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT version()");
    console.log(result.rows[0]);
  } finally {
    client.release();
  }
}
getPgVersion();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  date DATE
);

`;
// INSERT INTO messages (username, text, date)
// VALUES
//   ('Amando', 'Hi there!', '2020-10-12'),
//   ('Odin', 'Hello World!', '2020-10-15')

async function initialize() {
  console.log("seeding...");
  await pool.query(SQL);
  console.log("done");
}

// initialize();

async function getAllMessages() {
  const msgs = await pool.query("SELECT * FROM messages");
  return msgs.rows;
}

async function getOneMessage(id) {
  const msgs = await pool.query(`SELECT * FROM messages WHERE id = ${id}`);
  return msgs.rows;
}

async function addMessage({ name, messageText, date }) {
  await pool.query(
    `INSERT INTO messages (username, text, date) 
VALUES ($1, $2, $3);`,
    [name, messageText, date]
  );
}

async function deleteMessage(id) {
  await pool.query(`DELETE FROM messages WHERE id = $1;`, [id]);
}

module.exports = { deleteMessage, getAllMessages, addMessage, getOneMessage };
