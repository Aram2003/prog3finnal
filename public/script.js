      google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var jsonData = $.ajax({
          url:"https://rawgit.com/Aram2003/prog3finnal/master/collector/data/games.json",
          dataType: "json",
          async: false
        }).responseText;
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container)   
        var data = new google.visualization.DataTable(jsonData);
        chart.draw(data);
      }
