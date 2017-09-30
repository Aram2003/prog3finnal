var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var forEach = require("async-foreach");
var path = "./data/games.json";
var dates = [];
urls = [
"https://www.gamespot.com/grand-theft-auto/",
"https://www.gamespot.com/grand-theft-auto-liberty-city-stories/",
"https://www.gamespot.com/grand-theft-auto-san-andreas/",
"https://www.gamespot.com/grand-theft-auto-chinatown-wars/",
"https://www.gamespot.com/grand-theft-auto-vice-city/",
"https://www.gamespot.com/grand-theft-auto-2/",
"https://www.gamespot.com/grand-theft-auto-iii/",
"https://www.gamespot.com/grand-theft-auto-iv/",
"https://www.gamespot.com/grand-theft-auto-v/",
"https://www.gamespot.com/bully/",
"https://www.gamespot.com/grand-theft-auto-vice-city-stories/",
"https://www.gamespot.com/the-italian-job/",
"https://www.gamespot.com/l-a-noire/",
"https://www.gamespot.com/manhunt/",
"https://www.gamespot.com/manhunt-2/",
"https://www.gamespot.com/max-payne/",
"https://www.gamespot.com/max-payne-2-the-fall-of-max-payne/",
"https://www.gamespot.com/max-payne-3/",
"https://www.gamespot.com/midnight-club-street-racing/",
"https://www.gamespot.com/midnight-club-los-angeles/",
"https://www.gamespot.com/midnight-club-ii/",
"https://www.gamespot.com/midnight-club-3-dub-edition/",
"https://www.gamespot.com/oni/",
"https://www.gamespot.com/red-dead-redemption/",
"https://www.gamespot.com/red-dead-redemption-2/",
"https://www.gamespot.com/red-dead-revolver/",
"https://www.gamespot.com/smugglers-run/",
"https://www.gamespot.com/smugglers-run-2-hostile-territory/",
"https://www.gamespot.com/state-of-emergency/",
"https://www.gamespot.com/rockstar-games-presents-table-tennis/",
"https://www.gamespot.com/thrasher-presents-skate-and-destroy/",
"https://www.gamespot.com/red-dead-redemption-undead-nightmare/",
"https://www.gamespot.com/the-warriors/",
"https://www.gamespot.com/wild-metal-country/",
"https://www.gamespot.com/surfing-h3o/",
"https://www.gamespot.com/evel-knievel/",
"https://www.gamespot.com/monster-truck-madness-2/",
"https://www.gamespot.com/earthworm-jim-3d/",
"https://www.gamespot.com/duke-nukem-forever/",
"https://www.gamespot.com/beaterator/",
"https://www.gamespot.com/rockstar-games-collection-edition-1/",
"https://www.gamespot.com/midnight-club-la-remix/",
"https://www.gamespot.com/grand-theft-auto-the-trilogy/",
"https://www.gamespot.com/grand-theft-auto-the-classics-collection/"
];

for(i=0;i<urls.length;i++){
	request(urls[i], function(error, response, page){
    if(!error){
        var $ = cheerio.load(page); 
        var name = $("a.wiki-title");
        var release = $("ul.kubrick-info__releasedate");
        var description = $("dd.pod-objectStats-info__deck");
        var rating = $("div.gs-score__cell");
            var date = {
                game:$(name).text().trim(),
                releasedate:$(release).text().trim(),
                description:$(description).text().trim(),
                rating:$(rating).text().trim()
                
            }
            console.log(date);
            dates.push(date);
        }
        fs.writeFile(path, JSON.stringify(dates));
        
    });
}
