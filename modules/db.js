
const mysqli = require("mysql");
const db = mysqli.createPool({
  host: process.env.host || "localhost",
  user: process.env.user || "root",
  password: process.env.password || "",
  database: process.env.database || "social_ajay_app",
});

module.exports = db;