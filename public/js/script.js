var database = firebase.database();

var ref = database.ref('Products');

document.body.className = "loading";
ref.on('value', gotData, error);

function error(error) {
    console.log(error);
}




const xaxis = [],
    yaxis = [];

var data;

function gotData(data) {

    document.body.className = "loaded";
    console.log('loaded');
    console.log(data.val());
    data = data.val();
    var keys = Object.keys(data);
    console.log(keys);
    for (var i = 0; i < keys.length; i++) {


        $('#table').append(`
    <tr>
    <td>${data[keys[i]].Id}</td>
    <td> <img class="table" src="${data[keys[i]].Image}" alt="Product Image URL error"></td>
    <td>${data[keys[i]].ProductName}</td>
    <td>${data[keys[i]].Description}</td>
    <td><a href ="${data[keys[i]].ThumbnailImage}">${data[keys[i]].ThumbnailImage}</a></td>
    <td>${data[keys[i]].Tags}</td>
    <td><strong>${data[keys[i]].Stock}</strong></td>
    <td><strong>₹${data[keys[i]].Price}</strong></td>
    <td><button class="btn btn-light" id="${keys[i]}" onclick="editData(this.id)" >Edit</button></td>
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
    window.document.location = `../html/edit.html?id=${Id}`;
}

var tableOffset = $("#table-1").offset().top;
var $header = $("#table-1 > thead").clone();
var $fixedHeader = $("#header-fixed").append($header);

$(window).bind("scroll", function() {
    var offset = $(this).scrollTop();

    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
        $fixedHeader.show();
    } else if (offset < tableOffset) {
        $fixedHeader.hide();
    }
});