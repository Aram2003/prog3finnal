var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var forEach = require("async-foreach");
var path = "./data/items.json";
var url = "https://en.wikipedia.org/wiki/Category:Rockstar_Games";
var items = [];

request(url, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var list = $(".mw-category-group ul li a");
        for (var i = 13; i<14; i++){
            console.log($(list[i]).text());
            console.log($(list[i]).attr("href"));
            var obj = {
                id: i,
                text: $(list[i]).text(),
                href: $(list[i]).attr("href")
            }
            console.log(obj);
            items.push(obj);
        }
        for (var i =17; i<31; i++){
        console.log($(list[i]).text());
            console.log($(list[i]).attr("href"));
            var obj = {
                id: i,
                text: $(list[i]).text(),
                href: $(list[i]).attr("href")
            }
            console.log(obj);
            items.push(obj);
        }
        for (var i = 33; i<51; i++){
        console.log($(list[i]).text());
            console.log($(list[i]).attr("href"));
            var obj = {
                id: i,
                text: $(list[i]).text(),
                href: $(list[i]).attr("href")
            }
            console.log(obj);
            items.push(obj);
        }
        for(var i=53; i<list.length; i++){
            console.log($(list[i]).text());
            console.log($(list[i]).attr("href"));
            var obj = {
                id: i,
                text: $(list[i]).text(),
                href: $(list[i]).attr("href")
            }
            console.log(obj);
            items.push(obj);
        }
    }
    fs.writeFile(path, JSON.stringify(items));
});