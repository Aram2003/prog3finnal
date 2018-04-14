 google.charts.load('current', {'packages': ['orgchart','table','bar','corechart']});
 google.charts.setOnLoadCallback(drawTable);
 google.charts.setOnLoadCallback(drawPie);
 google.charts.setOnLoadCallback(drawOrgChart);
 google.charts.setOnLoadCallback(drawChart);
 google.charts.setOnLoadCallback(drawScatter);
 google.charts.setOnLoadCallback(drawColumn);
 

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
                width: '90%',
                height: '60%'
            };
            var table = new google.visualization.Table(document.getElementById('barformat_div'));
            var formatter = new google.visualization.BarFormat({ width: 100 });
            formatter.format(data, 3); 
            table.draw(data, options);
        }
    });
}

function drawOrgChart() {
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
                width: '40%',
                height: '60%'
            };
            var table = new google.visualization.OrgChart(document.getElementById('org'));
            var formatter = new google.visualization.BarFormat({ width: 100 });
            formatter.format(data, 3); 
            table.draw(data, options);
        }
    });
}
function drawChart() {
    $.ajax({
        url: "https://rawgit.com/Aram2003/prog3finnal/master/collector/data/games.json",
        dataType: "json",
        success: function (jsonData) {
          console.log(jsonData);
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'game');
            data.addColumn('number', 'rating');
            for (var i = 0; i < 10; i++) {
              console.log(jsonData.games[i].game);
                data.addRow([
                    jsonData.games[i].game, parseFloat(jsonData.games[i].rating)
                ]);
            }
            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '40%',
                height: '60%'
            };
            var table = new google.visualization.BarChart(document.getElementById('abc'));
            var formatter = new google.visualization.BarFormat({ width: 100 });
           
            table.draw(data, options);
        }
    });
}
function drawScatter(){
    $.ajax({
        url: "https://rawgit.com/Aram2003/prog3finnal/master/collector/data/games.json",
        dataType: "json",
        success: function (jsonData) {
          console.log(jsonData);
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'game');
            data.addColumn('number', 'rating');
            for (var i = 0; i < jsonData.games.length; i++) {
              console.log(jsonData.games[i].game);
                data.addRow([
                    jsonData.games[i].game, parseFloat(jsonData.games[i].rating)
                ]);
            }
            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '40%',
                height: '60%'
            };
            var table = new google.visualization.ScatterChart(document.getElementById('scatter'));
            var formatter = new google.visualization.BarFormat({ width: 100 });
           
            table.draw(data, options);
        }
    });
}
function drawPie(){
    $.ajax({
        url: "https://rawgit.com/Aram2003/prog3finnal/master/collector/data/games.json",
        dataType: "json",
        success: function (jsonData) {
          console.log(jsonData);
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'game');
            data.addColumn('number', 'rating');
            for (var i = 0; i < jsonData.games.length; i++) {
              console.log(jsonData.games[i].game);
                data.addRow([
                    jsonData.games[i].game, parseFloat(jsonData.games[i].rating)
                ]);
            }
            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '40%',
                height: '60%',
                is3D:true
            };
            var table = new google.visualization.PieChart(document.getElementById('pie'));
            var formatter = new google.visualization.BarFormat({ width: 100 });
            table.draw(data, options);
        }
    });
}
function drawColumn(){
    $.ajax({
        url: "https://rawgit.com/Aram2003/prog3finnal/master/collector/data/games.json",
        dataType: "json",
        success: function (jsonData) {
          console.log(jsonData);
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'game');
            data.addColumn('number', 'rating');
            for (var i = 0; i < jsonData.games.length; i++) {
              console.log(jsonData.games[i].game);
                data.addRow([
                    jsonData.games[i].game, parseFloat(jsonData.games[i].rating)
                ]);
            }
            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '40%',
                height: '60%',
                is3D:true
            };
            var table = new google.visualization.ColumnChart(document.getElementById('column'));
            var formatter = new google.visualization.BarFormat({ width: 100 });
            table.draw(data, options);
        }
    });
}

$(window).resize(function () {
    drawTable();
    drawOrgChart();
    drawChart();
    drawScatter();
    drawPie();
    drawColumn();
});

