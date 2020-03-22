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

app.listen(PORT, function () {
  console.log("Listening on PORT", PORT);
});







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
        title_link: $(this).find('strong').find('a').attr("href") || '',
        option: $(this).find('em').text() || '',
        option_link: $(this).find('em').find('a').attr("href") || '',
        text: $(this).text()
      }
      // db.Entry.create(entry)

      if (entry.title) {
        obj.entries.push(entry)
      }
    })
    console.log(obj)
    categories.push(obj)

    // })

  })

  // $(".entry-content").children(".wp-block-group.alignfull").each((index,element)=>{

  //   $(element).find("h4","strong","a").each((i,helem)=>{
  //     categories[index]={
  //       title:$(this).find("h4"),
  //       name:$(this).find("strong"),
  //       link:$(this).find("a").attr("href")
  //     };

  //     console.log(categories);

  //   })
  // var results = $(".entry-content").children(".wp-block-group.alignfull").children();
  // results.each((i,res)=>{
  //   var title = $(res).children("h4").text();
  //   var name = res.children[1];
  //   console.log(title);

  // })
  //   $(".entry-content").children(".wp-block-group.alignfull").not(':first-child').children().each((index, element) => {

  //     const title = $(element).children("h4").text();
  //     const names = $(element).children(".wp-block-columns.alignwide").children(".wp-block-column").children("p").children("strong").text();
  //     const link = $(element).children(".wp-block-columns.alignwide").children(".wp-block-column").children("p").children("a").attr("href");
  //     categories[index] = { title, names, link };
  //   })
  //   console.log(categories);

});


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




//barely working but object
  // $(".entry-content").children(".wp-block-group.alignfull").not(':first-child').children(".wp-block-group__inner-container").each((index,element)=>{

  //   const title = $(element).children("h4").text();
  //   const names = $(element).children(".wp-block-columns.alignwide").children(".wp-block-column").children("p").children("strong").text();
  //   const link = $(element).children(".wp-block-columns.alignwide").children(".wp-block-column").children("p").children("a").attr("href");
  //   categories[index]={title,names,link};
  // })
  // console.log(categories);






        // .then(groupName=>{
      //   $(element).find("strong").each((s,selem)=>{
      //     const names = $(selem).text();
      //   })
      //   .then(names=>{
      //     $(element).find("a").attr("href").each((l,lelem)=>{
      //       const links = $(lelem).text();
      //     })
      //     .then(links=>{
      //       categories.push({
      //         title:groupName,
      //         names:names,
      //         link:links
      //       })
      //     })
      //   })
      // })
  //   const link = $(element).children(".wp-block-columns.alignwide").children(".wp-block-column").children("p").children("a").attr("href");
  //   const names = $(element).find("strong").each((i, el)=>{
  //     categories.push({
  //       title:title,
  //       names:$(el).text(),
  //       link:link
  //     })
  //   })


  // })
  // console.log(categories);








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
