var firebaseConfig = {
    apiKey: "AIzaSyCo8HJ00OidtCm5kfDHrBJyDZtXNYR2LUc",
    authDomain: "rely-fbd57.firebaseapp.com",
    databaseURL: "https://rely-fbd57.firebaseio.com",
    projectId: "rely-fbd57",
    storageBucket: "rely-fbd57.appspot.com",
    messagingSenderId: "316014605106",
    appId: "1:316014605106:web:f09786028d1a14e4d65d2b",
    measurementId: "G-Y3DZ62S9GG"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var database = firebase.database();

async function saveData(data)
{
  var res =  await database.ref('products').push(data, (error)=>
    {
        if (error) {
            console.log('ooops');
            } else {
            console.log('data saved!');
            }    
    });

}

document.querySelector("#saveNewData").addEventListener("submit", () => {
    const input = document.querySelector("#inputForm");
   
    var id = document.querySelector("#pid").value;
    var name = document.querySelector("#pname").value;
    var url1 = document.querySelector("#purl").value;
    var url2 = document.querySelector("#purl2").value;
    var Description = document.querySelector("#description").value;
    var tags = document.querySelector("#ptags").value;
    var stock = document.querySelector("#pstock").value;
    var price = document.querySelector("#pprice").value;
    var packingType = document.querySelector("#pptype").value;
    var data = {
        id: id,
        Description: Description,
        Image: url1,
        PackagingType: packingType,
        Price: price,
        ProductName: name,
        Stock: stock,
        Tags: tags,
        ThumbnailImage: url2
    }

    saveData(data);
});
