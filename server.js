// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 8080;

const axios = require("axios");
const cheerio = require("cheerio");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// const hbs = require("express-handlebars");
// app.engine("handlebars", hbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// app.use(require("./routes"));

// app.listen(PORT, function () {
//   console.log("Listening on PORT", PORT);
// });



axios.get("http://redmondlocal.com").then((res) => {
  const categories = [];
  const $ = cheerio.load(res.data);

  $("h4.has-text-align-center").each(function (i, element) {

    var obj = {
      title: $(this).text(),
      entries: []
    }

    // db.Headers.create({ title: title })
    //   .then(function (header) {

        var cols = $(this).siblings('.wp-block-columns').children()
        $(cols).each(function (i, element) {
          var entry = {
            //headerId: header.id,
            title: $(this).find('strong').text(),
            title_link: $(this).find('a').attr("href")|| '',
            option: $(this).find('em').text() || '',
            option_link: $(this).find('em').find('a').attr("href")||'',
            text: $(this).text().replace(/([A-Z])/g, ' $1').trim().replace(/\n/g,"")
          }
          // db.Entry.create(entry)

          if (entry.title) {
            obj.entries.push(entry)
          }
        })
        console.log(obj)
        categories.push(obj)

      

  })


});
