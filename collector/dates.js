var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var forEach = require("async-foreach");
var path = "./data/dates.json";
var dates = [];
var url = "https://en.wikipedia.org/wiki/Bully_(video_game)";
var link = "https://www.giantbomb.com/grand-theft-auto-advance/3030-3527/";
var href= "https://en.wikipedia.org/wiki/Grand_Theft_Auto_(video_game)";
var gta2 = "https://en.wikipedia.org/wiki/Grand_Theft_Auto_2";
var gta3 = "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III";
var gta4 = "http://store.steampowered.com/app/12210/Grand_Theft_Auto_IV/";
var gta5 = "https://www.geforce.com/games-applications/pc-games/grand-theft-auto-v/description";
var gtachina = "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Chinatown_Wars";
var gtalib = "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Liberty_City_Stories";
var gtasa = "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_San_Andreas";
var gtabal = "https://strategywiki.org/wiki/Grand_Theft_Auto:_The_Ballad_of_Gay_Tony";
var gtalost = "https://www.dreamgame.com/us/grand-theft-auto-iv-the-lost-damned-4";
var gtavice ="https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City";
var gtastories = "https://www.gamespot.com/grand-theft-auto-vice-city-stories/";
var italianjob = "https://www.gamespot.com/the-italian-job/";
var lanoire = "https://www.gamespot.com/l-a-noire/";
var manhunt = "https://www.gamespot.com/manhunt/";
var manhunt2 = "https://www.gamespot.com/manhunt-2/";
var maxpayne = "https://www.gamespot.com/max-payne/";
var maxpayne2 = "https://en.wikipedia.org/wiki/Max_Payne_2:_The_Fall_of_Max_Payne";
var maxpayne3 = "https://www.gamespot.com/max-payne-3/";
var club = "https://www.gamespot.com/midnight-club-street-racing/";
var clubla = "https://www.gamespot.com/midnight-club-los-angeles/";
var club2 = "https://www.gamespot.com/midnight-club-ii/";
var club3 = "https://www.gamespot.com/midnight-club-3-dub-edition/";
var oni = "https://www.gamespot.com/oni/";
var red = "https://www.gamespot.com/red-dead-redemption/";
var red2 = "https://www.gamespot.com/red-dead-redemption-2/";
var redrev = "https://www.gamespot.com/red-dead-revolver/";
var run = "https://www.gamespot.com/smugglers-run/";
var run2 = "https://www.gamespot.com/smugglers-run-2-hostile-territory/";
var state = "https://www.gamespot.com/state-of-emergency/";
var tennis = "https://www.gamespot.com/rockstar-games-presents-table-tennis/";
var skate = "https://www.gamespot.com/thrasher-presents-skate-and-destroy/";
var undead = "https://www.gamespot.com/red-dead-redemption-undead-nightmare/";
var warrior = "https://www.gamespot.com/the-warriors/";
var wild = "https://www.gamespot.com/wild-metal-country/";
request(url, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $(".fn");
        var release = $(".NavHead");
            var date = {
            	game:$(name).text(),
                releasedate: $(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });

	request(link, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $(".bar span a");
        var release = $("#wiki-3030-3527-release_date");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(href, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.fn");
        var release = $(".NavHead");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gta2, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.fn");
        var release = $(".NavHead");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gta3, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.fn");
        var release = $(".NavHead");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gta4, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $(".apphub_AppName");
        var release = $("span.date");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gta5, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1#page-title.title");
        var release = $("div#info_release_date");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gtachina, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.fn");
        var release = $(".NavHead");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gtalib, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.fn");
        var release = $(".NavHead");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gtasa, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.fn");
        var release = $(".NavHead");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gtabal, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.infobox_heading");
        var release = $("div.release_date");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gtalost, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("div.product-name");
        var release = $("td.data");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gtavice, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.fn");
        var release = $(".NavHead");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(gtastories, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(italianjob, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(lanoire, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(manhunt, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(manhunt2, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(maxpayne, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(maxpayne2, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("th.fn");
        var release = $("div.NavHead");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(maxpayne3, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(club, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(clubla, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(club2, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(club3, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(oni, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(red, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(red2, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(redrev, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(run, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(run2, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
    request(state, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
     request(tennis, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
     request(skate, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
     request(undead, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
     request(warrior, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
     request(wild, function(error, response, page){
    if(!error){
        var $ = cheerio.load(page);
        var name = $("h1.gameObject__title");
        var release = $("ul.kubrick-info__releasedate");
            var date = {
            	game:$(name).text(),
                releasedate:$(release).text()
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
    });
