const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const axios = require("axios");
const cheerio = require("cheerio");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const hbs = require("express-handlebars");
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require("./routes"));

app.listen(PORT, function() {
  console.log("Listening on PORT", PORT);
});





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



// function getData(){
// const cheerio = require('cheerio');
// const got = require('got');

// const vgmUrl= 'https://redmondlocal.com/';

// got(vgmUrl).then(response => {
//   const $ = cheerio.load(response.body);
//  console.log($('title')[0].children[0]);
// }).catch(err => {
//   console.log(err);
// });

// };
// getData();




axios.get("http://redmondlocal.com").then((res)=>{
    const categories = [];
    const $ = cheerio.load(res.data);

    // $(".wp-block-group .alignfull").each((index,element)=>{
    //   const title = $(element).children("h4");
    // })

    //categories
    // $("h4.has-text-align-center").each((index, element)=>{
    //   const title = $(element).text();
    //   categories[index]={title:title};

    // });
    // console.log(categories);

    // $(".has-text-align-center").each((index, element)=>{
    //   const title = $(element).children('h4').text();
    //   categories[index] = {title:title};
     
    // });
    // console.log(categories);


    // console.log($('.has-text-align-center').children('strong').first().text());
    // console.log($('.entry-content').find('h4').text());

    // creating object for categories
    // $('.entry-content').find('h4').each((index,element)=>{
    //   const title=$(element).text();
    //   categories[index]={title};
    // })
    // console.log(categories);

  //  console.log($('.entry-content').find('strong').text());
  
  // $(".entry-content").find('strong').each((index,element)=>{
  //   const name = $(element).text();
  //   categories[index]={name};
  // })
  // console.log(categories);


 
  // $(".wp-block-group.alignfull").find('strong').each((index,element)=>{
  //   const name = $(element).text();
  //   categories[index]={name};
  // })
  // console.log(categories);


  // console.log($("#main").children(".wp-block-group.alignfull").html());
  // $(".wp-block-group.alignfull").find('strong').each((index,element)=>{
  //   const name = $(element).text();
  //   categories[index]={name};
  // })
  // console.log(categories);
 
  // console.log($(".wp-block-columns.alignwide").parent().html());
  $(".entry-content").children(".wp-block-group.alignfull").each((index,element)=>{
    const title = $(element).find("h4").text();
    const names = $(element).find("strong").text();
    categories[index]={title,names};
  })
  console.log(categories);
});

// console.log($(".entry-content").children(".wp-block-group.alignfull").children(".wp-block-group__inner-container").children("h4").html());




