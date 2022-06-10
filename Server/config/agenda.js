const Agenda = require("agenda");
const dotenv = require("dotenv");

dotenv.config();

const agenda = new Agenda({
  db: { address: process.env.MONGO_URI },
  collection: "jobs",
});

module.exports = agenda;
