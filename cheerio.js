// `https://seattle.craigslist.org/search/jjj?format=rss&query=web%20developer`

// https://stackoverflow.com/questions/597907/open-webpage-and-parse-it-using-javascript
// $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://seattle.craigslist.org/search/jjj?format=rss&query=web%20developer') + '&callback=?', function(data){
// 	console.log(data.contents);
// });
// https://www.twilio.com/blog/web-scraping-and-parsing-html-with-node-js-and-cheerio

// const req = new XMLHttpRequest();
// req.open('GET', 'https://seattle.craigslist.org/search/jjj?format=rss&query=web%20developer', false);
// req.send(null);
// if(req.status == 200)
//    dump(req.responseText);

// parser
//TODO1 - date parser item.isoDate

function getData() {
  const cheerio = require("cheerio");
  const got = require("got");

  const vgmUrl = "https://redmondlocal.com/";

  got(vgmUrl)
    .then(response => {
      const $ = cheerio.load(response.body);
      console.log($("title")[0].children[0]);
    })
    .catch(err => {
      console.log(err);
    });
}
getData();
