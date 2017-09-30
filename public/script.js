 google.charts.load('current', {'packages': ['table']});
 google.charts.setOnLoadCallback(drawTable)

 function drawTable() {
    $.ajax({
        url: "https://rawgit.com/Aram2003/prog3finnal/master/collector/data/games.json",
        dataType: "json",
        success: function (jsonData) {
          console.log(jsonData);
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'game');
            data.addColumn('string', 'releasedate');
            data.addColumn('string', 'description');
            data.addColumn('number', 'rating');
            for (var i = 0; i < jsonData.games.length; i++) {
              console.log(jsonData.games[i].game);
                data.addRow([
                    jsonData.games[i].game,
                    jsonData.games[i].releasedate,
                    jsonData.games[i].description,
                    parseFloat(jsonData.games[i].rating)
                ]);
            }
            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '50%',
                height: '50%'
            };
            var table = new google.visualization.Table(document.getElementById('barformat_div'));
            var formatter = new google.visualization.BarFormat({ width: 100 });
            formatter.format(data, 3); 
            table.draw(data, options);
        }
    });
}
$(window).resize(function () {
    drawTable();
});

