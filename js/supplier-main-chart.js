google.charts.load("current", { packages: ["corechart", "line"] });
google.charts.setOnLoadCallback(drawBasic_1);

window.addEventListener('resize',()=>{
    drawBasic_1();
})

function drawBasic_1() {

  var data = new google.visualization.DataTable();
  data.addColumn("date", "date");
  data.addColumn("number", "날짜");

  data.addRows([
    [new Date('2021-04-8'), 1],
    [new Date('2021-04-9'), 2],
    [new Date('2021-04-10'), 1],
    [new Date('2021-04-11'), 1],
    [new Date('2021-04-12'), 3],
    [new Date('2021-04-13'), 2],
    [new Date('2021-04-14'), 3],
    [new Date('2021-04-15'), 4],
    [new Date('2021-04-16'), 3],
    [new Date('2021-04-17'), 1],
    [new Date('2021-04-18'), 2]     
  ]);


  var options = {
    pointSize: 7,
    legend: "none",
    hAxis: {
      baselineColor:"#ddd",
      gridlines:{color: '#ffffff', minSpacing: 40},
      format:'MM.dd'
    },
    vAxis: {
        // title: '명',
        format: '',
        baselineColor:"#ddd",
      gridlines:{color: '#ddd', minSpacing: 20}
    },
    series: {
        0: { color: '#FF5E00' },
      },
      chartArea: {width: '70%', height: '70%'},
    width:'100%',
    height:'100%'
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("linechart_material")
  );

  chart.draw(data, options);
}
