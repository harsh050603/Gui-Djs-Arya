 const ctx1 = document.getElementById('mychart1');
        const chart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Temperature',
                    data: [],
                    borderWidth: 2
                }]
            },
            options: {
                layout: {
                    padding: 100
                }
            }
        })
        dynamic(chart1, [100, 200, 400, 700, 300], [1000, 3000, 6000, 2500, 3400])
        function dynamic(chart1, xa, ya) {
            let i = 0;
            setInterval(() => {
                if (i === 5)
                    return;
                chart1.data.labels.push(xa[i]);
                chart1.data.datasets[0].data.push(ya[i]);
                i++;
                console.log(xa[i]);
                console.log(ya[i]);
                chart1.update();
            }, 1000);
        }


const ctx2 = document.getElementById('mychart2');
        const chart2 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Voltage',
                    data: [],
                    borderWidth: 2
                }]
            },
            options: {
                layout: {
                    padding: 100
                }
            }
        })
        dynamic(chart2, [100, 200, 400, 700, 300], [1000, 2000, 6000, 2500, 3400])
        function dynamic(chart2, xa, ya) {
            let i = 0;
            setInterval(() => {
                if (i === 5)
                    return;
                chart2.data.labels.push(xa[i]);
                chart2.data.datasets[0].data.push(ya[i]);
                i++;
                console.log(xa[i]);
                console.log(ya[i]);
                chart2.update();
            }, 1000);
        }



        const ctx3 = document.getElementById('mychart3');
        const chart3 = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Altitude',
                    data: [],
                    borderWidth: 2
                }]
            },
            options: {
                layout: {
                    padding: 100
                }
            }
        })
        dynamic(chart3, [100, 200, 400, 700, 300], [8000, 2000, 6000, 2500, 3400])
        function dynamic(chart3, xa, ya) {
            let i = 0;
            setInterval(() => {
                if (i === 5)
                    return;
                chart3.data.labels.push(xa[i]);
                chart3.data.datasets[0].data.push(ya[i]);
                i++;
                console.log(xa[i]);
                console.log(ya[i]);
                chart3.update();
            }, 1000);
        }
       


//TABS
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    setTimeout(function () {map.invalidateSize()},1)
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})




//Maps
const map = L.map('map').setView([20, 72.8], 13);
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors';
const tileUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(map);




//3D CHARTS
var data1 = null;
var graph3d1 = null;

function customx(x) {
    return (x +10);
}

function customy(y){
    return (y*y);
}

// Called when the Visualization API is loaded.
function drawVisualization() {
  // Create and populate a data table.
  var data1 = new vis.DataSet();
  // create some nice looking data with sin/cos
  var axisMax = 10;
  for (var x = 0; x < axisMax; x++) {
    for (var y = 0; y < axisMax; y++) {
    var x = customx(x);
    var y = customy(y);
    var z = x + y + 10;
    data1.add({ 
        x: x, 
        y: y, 
        z: z,
        style: z
    });
  }
}

  // specify options
  var options = {
    width: "400px",
    height: "400px",
    style: "line",
     dataColor:{
strokeWidth:5
     },
    showPerspective: true,
    showGrid: true,
     showShadow:false,
    keepAspectRatio: true,
    verticalRatio: 0.5
  };

  // create our graph
  var container = document.getElementById("mygraph1");
  graph = new vis.Graph3d(container, data1, options);

  graph.setCameraPosition(0.4, undefined, undefined);
}

window.addEventListener("load", () => {
  drawVisualization();
});











        // const ctx4 = document.getElementById('mychart4');
        // const chart4 = new Chart(ctx4, {
        //     type: 'line',
        //     data: {
        //         labels: [],
        //         datasets: [{
        //             label: 'Time',
        //             data: [],
        //             borderWidth: 2
        //         }]
        //     },
        //     options: {
        //         layout: {
        //             padding: 100
        //         }
        //     }
        // })
        // dynamic(chart4, [100, 200, 400, 700, 300], [1000, 2000, 6000, 2500, 3400])
        // function dynamic(chart4, xa, ya) {
        //     let i = 0;
        //     setInterval(() => {
        //         if (i === 5)
        //             return;
        //         chart4.data.labels.push(xa[i]);
        //         chart4.data.datasets[0].data.push(ya[i]);
        //         i++;
        //         console.log(xa[i]);
        //         console.log(ya[i]);
        //         chart4.update();
        //     }, 1000);
        // }



        // const ctx5 = document.getElementById('mychart5');
        // const chart5 = new Chart(ctx5, {
        //     type: 'line',
        //     data: {
        //         labels: [],
        //         datasets: [{
        //             label: 'Latitude',
        //             data: [],
        //             borderWidth: 2
        //         }]
        //     },
        //     options: {
        //         layout: {
        //             padding: 100
        //         }
        //     }
        // })
        // dynamic(chart5, [100, 200, 400, 700, 300], [1000, 2000, 6000, 2500, 3400])
        // function dynamic(chart5, xa, ya) {
        //     let i = 0;
        //     setInterval(() => {
        //         if (i === 5)
        //             return;
        //         chart5.data.labels.push(xa[i]);
        //         chart5.data.datasets[0].data.push(ya[i]);
        //         i++;
        //         console.log(xa[i]);
        //         console.log(ya[i]);
        //         chart5.update();
        //     }, 1000);
        // }



        // const ctx6 = document.getElementById('mychart6');
        // const chart6 = new Chart(ctx6, {
        //     type: 'line',
        //     data: {
        //         labels: [],
        //         datasets: [{
        //             label: 'Longitude',
        //             data: [],
        //             borderWidth: 2
        //         }]
        //     },
        //     options: {
        //         layout: {
        //             padding: 100
        //         }
        //     }
        // })
        // dynamic(chart6, [100, 200, 400, 700, 300], [1000, 2000, 6000, 2500, 3400])
        // function dynamic(chart6, xa, ya) {
        //     let i = 0;
        //     setInterval(() => {
        //         if (i === 5)
        //             return;
        //         chart6.data.labels.push(xa[i]);
        //         chart6.data.datasets[0].data.push(ya[i]);
        //         i++;
        //         console.log(xa[i]);
        //         console.log(ya[i]);
        //         chart6.update();
        //     }, 1000);
        // }





