var database = firebase.database();

var ref = database.ref('Products');

ref.on('value', gotData, error);


function error(error) {
    console.log(error);
}




const xaxis = [],
    yaxis = [];

var data;

function gotData(data) {
    console.log(data.val());
    data = data.val();
    var keys = Object.keys(data);
    console.log(keys);
    for (var i = 0; i < keys.length; i++) {


        $('#table').append(`<tr>
    <td>${data[keys[i]].Id}</td>
    <td>${data[keys[i]].ProductName}</td>
    <td>${data[keys[i]].Description}</td>
    <td><a href ="${data[keys[i]].Image}">${data[keys[i]].Image}</a></td>
    <td><a href ="${data[keys[i]].ThumbnailImage}">${data[keys[i]].ThumbnailImage}</a></td>
    <td>${data[keys[i]].Tags}</td>
    <td><strong>${data[keys[i]].Stock}</strong></td>
    <td><strong>₹${data[keys[i]].Price}</strong></td>
    <td><button class="btn btn-info" id="${keys[i]}" onclick="editData(this.id)" >Edit</button></td>
    </tr>
    `)

        xaxis.push(data[keys[i]].ProductName);
        yaxis.push(data[keys[i]].Stock);
    }
    console.log(xaxis);
    console.log(yaxis);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xaxis,
            datasets: [{
                label: 'Stock',
                data: yaxis,
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
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


function editData(Id) {
    console.log(Id);
    fill(Id);
}