const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

loginInfo = [];

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");

});

app.get("/deleteAll", function(req, res) {

  loginInfo = [];

  res.redirect("/");

});

app.get("/getData", function(req, res) {
  res.send(loginInfo);
})

app.post("/", function(req, res) {

  let login = req.body.login;
  let passwd = req.body.passwd;
  
  newUser = {
    username : login,
    pass: passwd
  }

  loginInfo.push(newUser);
  console.log(loginInfo);

  res.redirect("/secrets");

});

app.get("/secrets", function(req, res) {

  res.sendFile(__dirname + "/public/" + "secrets.html");

});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});