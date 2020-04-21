const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Connected to server on port " + PORT));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/createUser", (req, res) => {
  res.sendFile(__dirname + "/views/createUserPage.html");
});

app.post("/createUser", async (req, res) => {
  const { firstname, lastname } = req.body;
  console.log(firstname);
  if (firstname !== "" && lastname !== "") {
    const fullName = `${firstname} ${lastname}`;

    const users = await axios.get("https://jsonplaceholder.typicode.com/users");

    const chechUSerName = users.data.filter(
      (user) => user.username === firstname
    );
    console.log(chechUSerName);
  } else {
    res.sendFile(__dirname + "/views/createUserPage.html");
  }

  res.end();
});
