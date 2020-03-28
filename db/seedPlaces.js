const db = require('../models');
const axios = require('axios');
const cheerio = require('cheerio');

axios.get("http://redmondlocal.com").then(({ data }) => {
    const $ = cheerio.load(data);
    $("h4.has-text-align-center").each(function (i, element) {
        db.Category.create({ name: $(element).text() })
            .then(function (category) {
                var cols = $(element).siblings('.wp-block-columns').children();
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
            .catch(function (err) { console.log(err) })
    });
})