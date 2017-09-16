var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var forEach = require("async-foreach");
var path = "./data/dates.json";
var url =