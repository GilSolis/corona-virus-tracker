const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const hbs = require("express-handlebars");
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require("./routes"));


db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("Listening on PORT", PORT);
  });
});

