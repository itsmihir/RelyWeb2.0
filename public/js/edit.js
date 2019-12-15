var id;

function showLoc() {
    var l = location.search.length;
    id = location.search.slice(4, l);
    console.log(location.search.slice(4, l));

}
showLoc();
var database = firebase.database();
var ref = database.ref('Products/' + id);


document.body.className = "loading";
ref.on('value', gotData, error);


function error(error) {
    console.log(error);
}


function gotData(data) {
    document.body.className = "loaded";
    data = data.val();
    console.log(data);
    console.log(data[id]);
    document.querySelector("#pid").value = data.Id;
    document.querySelector("#pname").value = data.ProductName;
    document.querySelector("#purl").value = data.Image;
    document.querySelector("#purl2").value = data.ThumbnailImage;
    document.querySelector("#description").value = data.Description;
    document.querySelector("#ptags").value = data.Tags;
    document.querySelector("#pstock").value = data.Stock;
    document.querySelector("#pprice").value = data.Price;
    document.querySelector("#pptype").value = data.PackagingType;

}

document.querySelector("#saveData").addEventListener(("click"), () => {
    event.preventDefault();
    var id = document.querySelector("#pid").value;
    var name = document.querySelector("#pname").value;
    var url1 = document.querySelector("#purl").value;
    var url2 = document.querySelector("#purl2").value;
    var Description = document.querySelector("#description").value;
    var tags = document.querySelector("#ptags").value;
    var stock = document.querySelector("#pstock").value;
    var price = document.querySelector("#pprice").value;
    var packingType = document.querySelector("#pptype").value;

    if (name == "" || url1 == '' || url2 == '' || Description == '' || tags == '' || stock == '' || price == '' || packingType == '') {
        alert('Please Fill all the Data');
        return;
    }
    var data = {
        Id: id,
        Description: Description,
        Image: url1,
        PackagingType: packingType,
        Price: price,
        ProductName: name,
        Stock: stock,
        Tags: tags,
        ThumbnailImage: url2
    }
    ref.update(data)
        .then(() => {
            console.log('updated');
        })
        .catch((error) => {
            console.log(error);
        });

    window.location.href = '../html/index.html';
});

document.querySelector("#deleteData").addEventListener("click", () => {
    ref.remove();
})