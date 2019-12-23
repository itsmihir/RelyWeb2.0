var database = firebase.database();

var ref = database.ref('Users');

document.body.className = "loading";
ref.on('value', gotData, error);

function error(error) {
    console.log(error);
}

function gotData(data) {
    document.body.className = "loaded";
    console.log('loaded');
    //console.log(data.val());

    data = data.val();
    console.log(data);
    var keys = Object.keys(data);
    //  console.log(Keys);
    // console.log(data[Keys[1]].Address);

    for (var i = 0; i < keys.length; i++) {
        $('#table').append(`
        <tr>
        <td><strong>${keys[i]}</strong></td>
        // <td>${data[keys[i]].Name}</td>
        // <td>${data[keys[i]].Phone}</td>
        // <td>${data[keys[i]].Email}</td>
        // <td>${data[keys[i]].Address.Primary.Value}</td>
        
        // <td></td>
        </tr>
        `)
    }
    var mymap = L.map('mapid').setView([0, 0], 0);


    function create_map() {

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        }).addTo(mymap);

    }
    create_map();

}