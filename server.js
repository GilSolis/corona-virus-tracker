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

app.use(require("./routes"));

db.sequelize.sync({ force: true }).then(function() {
    axios.get("http://redmondlocal.com").then(({ data }) => {
        const $ = cheerio.load(data);

        $("h4.has-text-align-center").each(function(i, element) {

            db.Category.create({ name: $(element).text() })
                .then(function(category) {

                    var cols = $(element).siblings('.wp-block-columns').children();


                    cols.each(function(i, element) {
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
                .catch(function(err) { console.log(err) })
        });
    });
})