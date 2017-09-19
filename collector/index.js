var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var forEach = require("async-foreach");
var path = "./data/items.json";
var page1 = "https://www.gamespot.com/companies/rockstar-games/?page=1";
var page2 = "https://www.gamespot.com/companies/rockstar-games/?page=2";
var page3 = "https://www.gamespot.com/companies/rockstar-games/?page=3";
var items = [];

request(page1, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var names = $("h3.media-title");
        var reldate = $("time.media-date");
        var description = $("p.media-deck");
            var obj = {
                name:$(names).text(),
                reldate:$(reldate).text(),
                description:$(description).text()
            }
            console.log(obj);
            items.push(obj);
    }
    fs.writeFile(path, JSON.stringify(items));
});
request(page2, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var names = $("h3.media-title");
        var reldate = $("time.media-date");
        var description = $("p.media-deck");
            var obj = {
                name:$(names).text(),
                reldate:$(reldate).text(),
                description:$(description).text()
            }
            console.log(obj);
            items.push(obj);
    }
    fs.writeFile(path, JSON.stringify(items));
});
request(page3, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var names = $("h3.media-title");
        var reldate = $("time.media-date");
        var description = $("p.media-deck");
            var obj = {
                name:$(names).text(),
                reldate:$(reldate).text(),
                description:$(description).text()
            }
            console.log(obj);
            items.push(obj);
    }
    fs.writeFile(path, JSON.stringify(items));
});