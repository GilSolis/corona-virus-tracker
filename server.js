const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

const axios = require("axios");
const cheerio = require("cheerio");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const hbs = require("express-handlebars");
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/categoryApiRoutes.js")(app);
app.use(require("./routes"));

db.sequelize.sync({}).then(function () {
  axios.get("http://redmondlocal.com").then(({ data }) => {
    const $ = cheerio.load(data);

    $("h4.has-text-align-center").each(function (i, element) {
      // console.log($(this));
      db.Category.create({ name: $(element).text() })
        .then(function (category) {
          // console.log(category.dataValues.id)
          // db.Place.create({ name: "Peter" })
          // console.log("===========>", $(this).find('.wp-block-columns').children());
          var cols = $(element).siblings('.wp-block-columns').children();
          //console.log(cols);

          // console.log(cols);

          cols.each(function (i, element) {
            db.Place.create({
              categoryId: category.dataValues.id,
              name: $(this).find('strong').text(),
              titleLink: $(this).find('a').attr("href") || '',
              optionText: $(this).find('em').text() || '',
              optionLink: $(this).find('em').find('a').attr("href") || '',
              text: $(this).text().replace(/([A-Z])/g, ' $1').trim().replace(/\n/g, "")
            })
          })
        })
      // .catch(function(err){console.log (err)})
    });

  })

  app.listen(PORT, function () {
    console.log("Listening on PORT", PORT);
  });
});

