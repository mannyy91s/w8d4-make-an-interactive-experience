var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    datasets: [{
        label: 'Scatter Dataset',
        data: [
            {x: -10,y: 0},
              {x: 10,y: 5}
          ]
    }]
},
options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    },
});

setInterval(function(){
    fetch('https://thinksaydo.com/api.php')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(updateChart)
}, 1000)

var x = 0
var y = 0

function updateChart(response){
    x += response.x

    var newDataPoint = {
        x: x,
        y: response.y
    }
    myChart.data.datasets[0].data.push(newDataPoint)

    myChart.update()
}
