google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart_2);

window.addEventListener('resize',()=>{
  drawChart_2();
})

function drawChart_2() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  var options = {
    pieHole: 0.4,
    chartArea: {width: '70%', height: '70%'},
    width:'100%',
    height:'100%',
    pieSliceText: 'label',
    legend:"none"
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}
