const ctx = document.getElementById('myChart');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Time',
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

        dynamic(chart, [100, 200, 400, 700, 300], [1000, 2000, 6000, 2500, 3400])

        function dynamic(chart, xa, ya) {
            let i = 0;
            setInterval(() => {
                if (i === 5)
                    return;
                chart.data.labels.push(xa[i]);
                chart.data.datasets[0].data.push(ya[i]);
                i++;
                console.log(xa[i]);
                console.log(ya[i]);
                chart.update();
            }, 1000);
        }