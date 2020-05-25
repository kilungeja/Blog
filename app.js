const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use("/", (req, res) => {
  const users = [
    { name: "Jane", age: 12 },
    { name: "John", age: 22 },
    { name: "Janeth", age: 72 }
  ];
  res.status(200).json({ users: users });
});

app.listen(9090, () => {
  console.log("Server listening on port 9090");
});
