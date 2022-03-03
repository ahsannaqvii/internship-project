const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password123#@!",
  database: "TodoDB",
  multipleStatements: true,
});
DB.connect();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/todoList", (req, res) => {
  const SQLCommand = "SELECT * FROM todolist ";
  DB.query(SQLCommand, (err, result) => {
    res.send(result)
});
});
app.post("/api/Todos", (req, res) => {
  const Todo = req.body.Todo;

  const SQLCommand = "INSERT INTO todolist (task) VALUES (?)";
  DB.query(SQLCommand, [Todo], (err, result) => {
      console.log("error: ");
    console.log(err);
  });
});

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});

module.exports = DB;
