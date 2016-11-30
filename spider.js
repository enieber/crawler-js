const request = require('request');
const cheerio = require('cheerio');
let URL = "http://www.imdb.com/chart/moviemeter";

request(URL, function(err, res, body){
  if(err) console.log('Erro: ' + err);

  var $ = cheerio.load(body);

  $('.lister-list tr').each(function () {
    var title = $(this).find('.titleColumn a').text().trim();
    var rating = $(this).find('.imdbRating strong').text().trim();

    console.log('Title: ' + title + ' Rating ' + rating);
  });

});
