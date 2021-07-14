
let myChart = document.getElementById('myChart').getContext("2d");

// Global default


        let massPopChart = new Chart(myChart, {
            type: "doughnut", //bar horizontal bar, pie, line, doughnut radar and polar area
            data: {
                labels: [`zaria`, `kaduna`, `imo`, `anambra`, `owerri`, `yobe`],
                datasets: 
                [{
                    label: `Population`,
                    data: [
                        3,
                        5,
                        4,
                        10,
                        7
                    ],

                    backgroundColor:[
                        `green`,`blue`,`red`,`pink`,`black`
                    ],
                    borderWidth:`1`,
                    boderColor:`grey`,

                }]

            },
            options:{
                title:{
                    display:true,
                    text:`largest cities in Nigeria`,
                    fontSize: 25,
                    fontColor: `black`
                },
                legend:{
                    display:false,
                    position:`right`
                }
            }

        });







/*
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

*/